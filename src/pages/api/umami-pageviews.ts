// 文件路径: src/pages/api/umami-pageviews.ts
// 功能: 这是一个 Astro API 路由，用作 Umami 单篇文章统计数据的安全代理。

import type { APIRoute } from "astro";
import { umamiConfig } from "../../config";

export const GET: APIRoute = async ({ request }) => {
	// 1. 从请求的 URL 中获取要查询的文章路径 (例如: ?url=/posts/my-post/)
	const { searchParams } = new URL(request.url);
	const pageUrl = searchParams.get("url");
	if (!pageUrl) {
		return new Response(JSON.stringify({ error: "缺少页面 URL 参数" }), {
			status: 400,
		});
	}

	// 2. 解析 Umami 配置
	const fullShareUrl = umamiConfig.baseUrl || "";
	const shareUrlParts = fullShareUrl.match(
		/https:\/\/([a-z]{2})\.umami\.is\/share\/([a-zA-Z0-9]+)/,
	);
	const region = shareUrlParts?.[1];
	const shareId = shareUrlParts?.[2];
	const websiteId = umamiConfig.scripts.match(/data-website-id="([^"]+)"/)?.[1];

	if (!region || !shareId || !websiteId) {
		return new Response(JSON.stringify({ error: "Umami 配置不完整" }), {
			status: 500,
		});
	}

	try {
		// 3. 获取 Token
		const tokenResponse = await fetch(
			`https://${region}.umami.is/api/share/${shareId}`,
		);
		if (!tokenResponse.ok)
			throw new Error(`获取 Umami Token 失败: ${tokenResponse.status}`);
		const { token } = await tokenResponse.json();
		if (!token) throw new Error("Umami API 未返回 Token");

		// 4. 使用 Token 获取【单篇文章】的统计数据
		const pageviewsApiUrl = new URL(
			`https://${region}.umami.is/api/websites/${websiteId}/pageviews`,
		);
		pageviewsApiUrl.searchParams.append("url", pageUrl);

		const statsResponse = await fetch(pageviewsApiUrl.toString(), {
			headers: { Authorization: `Bearer ${token}` },
		});
		if (!statsResponse.ok)
			throw new Error(`获取 Umami 页面统计失败: ${statsResponse.status}`);
		const statsData = await statsResponse.json();

		// 5. 返回成功获取的数据
		return new Response(JSON.stringify(statsData), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("[API Route: umami-pageviews] 错误:", error);
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
		});
	}
};
