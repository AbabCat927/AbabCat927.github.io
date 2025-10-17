// 文件路径: src/pages/api/umami-stats.ts
// 功能: 这是一个 Astro API 路由，用作 Umami 全站统计数据的安全代理。

import type { APIRoute } from "astro";
import { umamiConfig } from "../../config"; // 从主配置文件导入 Umami 配置

// 【核心逻辑】定义一个处理 GET 请求的函数
export const GET: APIRoute = async ({ request }) => {
	// 1. 从 Umami 配置中解析出所需的所有信息
	const fullShareUrl = umamiConfig.baseUrl || "";
	const shareUrlParts = fullShareUrl.match(
		/https:\/\/([a-z]{2})\.umami\.is\/share\/([a-zA-Z0-9]+)/,
	);
	const region = shareUrlParts?.[1];
	const shareId = shareUrlParts?.[2];
	const websiteId = umamiConfig.scripts.match(/data-website-id="([^"]+)"/)?.[1];

	// 2. 验证配置是否完整
	if (!region || !shareId || !websiteId) {
		return new Response(JSON.stringify({ error: "Umami 配置不完整" }), {
			status: 500,
		});
	}

	try {
		// 3. 【服务器端请求第一步】获取临时访问令牌 (Token)
		const tokenResponse = await fetch(
			`https://${region}.umami.is/api/share/${shareId}`,
		);
		if (!tokenResponse.ok) {
			throw new Error(`获取 Umami Token 失败: ${tokenResponse.status}`);
		}
		const { token } = await tokenResponse.json();
		if (!token) {
			throw new Error("Umami API 未返回 Token");
		}

		// 4. 【服务器端请求第二步】使用 Token 获取全站统计数据
		const statsResponse = await fetch(
			`https://${region}.umami.is/api/websites/${websiteId}/stats`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		if (!statsResponse.ok) {
			throw new Error(`获取 Umami 全站统计失败: ${statsResponse.status}`);
		}
		const statsData = await statsResponse.json();

		// 5. 将成功获取的数据作为 JSON 格式返回给前端
		return new Response(JSON.stringify(statsData), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		// 6. 如果在任何步骤中出错，返回一个包含错误信息的 JSON 响应
		console.error("[API Route: umami-stats] 错误:", error);
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
		});
	}
};
