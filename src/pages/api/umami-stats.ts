// File: src/pages/api/umami-stats.ts

import type { APIRoute } from "astro";
import { umamiConfig } from "../../config";

export const GET: APIRoute = async () => {
	// 【修正】从新的、正确的 umamiConfig 结构中安全地读取数据
	const websiteId = umamiConfig.websiteId;
	const fullShareUrl = umamiConfig.shareUrl;

	const shareUrlParts =
		typeof fullShareUrl === "string"
			? fullShareUrl.match(
					/https:\/\/([a-z]{2})\.umami\.is\/share\/([a-zA-Z0-9]+)/,
				)
			: null;

	const region = shareUrlParts?.[1];
	const shareId = shareUrlParts?.[2];

	// 【修正】如果配置不完整，返回一个明确的错误 JSON，而不是让服务器崩溃
	if (!websiteId || !region || !shareId) {
		const errorMsg = "Umami API route error: Incomplete configuration.";
		console.error(errorMsg);
		return new Response(JSON.stringify({ error: errorMsg }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}

	try {
		// 获取 Token
		const tokenResponse = await fetch(
			`https://${region}.umami.is/api/share/${shareId}`,
		);
		if (!tokenResponse.ok) {
			throw new Error(
				`Failed to fetch Umami token with status: ${tokenResponse.status}`,
			);
		}
		const { token } = await tokenResponse.json();

		// 获取统计数据
		const statsResponse = await fetch(
			`https://${region}.umami.is/api/websites/${websiteId}/stats`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		if (!statsResponse.ok) {
			throw new Error(
				`Failed to fetch Umami stats with status: ${statsResponse.status}`,
			);
		}
		const data = await statsResponse.json();

		// 成功时返回数据
		return new Response(JSON.stringify(data), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Error in umami-stats API route:", error);
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
};
