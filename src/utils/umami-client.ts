// ==================================================================
// 文件路径: src/utils/umami-client.ts
// 功能描述: 这是所有 Umami 客户端逻辑的中心文件。
//           它负责从我们的 API 代理获取数据，并更新页面上的显示。
//           通过将逻辑分离到这里，我们确保了代码被正确编译并与 Swup 兼容。
// ==================================================================

// --- 逻辑部分 1: 获取并显示【单篇文章】的访问量 ---

/**
 * 异步函数，通过我们的 API 代理获取特定文章的访问量数据。
 * @param slug 文章的唯一标识符 (slug)。
 * @returns 返回包含访问量数据的对象，或在失败时返回 null。
 */
async function fetchPageViews(slug: string): Promise<any | null> {
	// 异步地发起一个网络请求 (fetch)。
	try {
		// 构造文章在网站上的标准 URL 路径。
		const pageUrl = `/posts/${slug}/`;
		// 向我们自建的 API 代理 /api/umami-pageviews 发起请求，并通过查询参数传递文章路径。
		const response = await fetch(
			`/api/umami-pageviews?url=${encodeURIComponent(pageUrl)}`,
		);
		// 检查代理服务器的响应是否成功 (例如，HTTP 状态码 200)。
		if (!response.ok) {
			// 如果代理返回错误，则抛出一个错误，以便被下面的 catch 块捕获。
			const errorData = await response.json();
			throw new Error(
				errorData.error || `服务器代理响应失败: ${response.status}`,
			);
		}
		// 如果响应成功，返回解析后的 JSON 数据。
		return await response.json();
	} catch (error) {
		// 如果在整个过程中发生任何错误，就在浏览器的控制台打印详细的错误信息，并返回 null。
		console.error(`[umami-client] 获取页面 (${slug}) 访问量时出错:`, error);
		return null;
	}
}

/**
 * 更新页面上显示文章访问量的元素。
 * @param data 从 API 获取到的数据。
 */
function updatePageViewsDisplay(data: any | null) {
	// 通过 ID 找到页面上那个用于显示访问量的 <span> 元素。
	const displayElement = document.getElementById("page-views-display");
	// 如果找不到该元素，则直接退出函数。
	if (!displayElement) return;

	// 检查数据是否有效，以及是否包含我们需要的 pageviews 数组。
	if (data?.pageviews) {
		// 使用 reduce 方法将数组中所有天数的访问量 (y值) 累加起来，得到总访问量。
		const totalViews = data.pageviews.reduce(
			(acc: number, cur: { y: number }) => acc + cur.y,
			0,
		);
		// 更新页面上的文本。
		displayElement.textContent = `浏览量 ${totalViews}`;
	} else {
		// 如果数据无效或获取失败，则显示“不可用”。
		displayElement.textContent = "统计不可用";
	}
}

/**
 * 这是暴露给外部的、用于初始化文章访问量显示的主函数。
 */
export function initializePageViews() {
	// 找到显示元素。
	const displayElement = document.getElementById("page-views-display");
	// 如果元素不存在，或者元素上没有我们附加的 data-slug 属性，则不执行任何操作。
	if (!displayElement || !displayElement.dataset.slug) return;

	// 从元素的 data-slug 属性中安全地读取 slug。
	const slug = displayElement.dataset.slug;
	// 调用 fetch 函数获取数据，并在获取成功后 (Promise resolve) 调用 updateDisplay 函数来更新页面。
	fetchPageViews(slug).then((data) => updatePageViewsDisplay(data));
}

// --- 逻辑部分 2: 获取并显示【网站总】访问量 ---

/**
 * 异步函数，通过我们的 API 代理获取整个网站的统计数据。
 * @returns 返回包含总访问量和总访客数的对象，或在失败时返回 null。
 */
async function fetchTotalSiteStats(): Promise<any | null> {
	try {
		// 向我们自建的 API 代理 /api/umami-stats 发起请求。
		const response = await fetch("/api/umami-stats");
		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(
				errorData.error || `服务器代理响应失败: ${response.status}`,
			);
		}
		return await response.json();
	} catch (error) {
		console.error("[umami-client] 通过代理获取总访问量时出错:", error);
		return null;
	}
}

/**
 * 更新页面上显示总访问量的元素。
 * @param stats 从 API 获取到的统计数据。
 */
function updateTotalStatsDisplay(stats: any | null) {
	const displayElement = document.getElementById("site-stats-display");
	if (!displayElement) return;

	if (stats?.pageviews && stats.visits) {
		displayElement.textContent = `总浏览 ${stats.pageviews.value} · 总访客 ${stats.visits.value}`;
	} else {
		displayElement.textContent = "统计不可用";
	}
}

/**
 * 这是暴露给外部的、用于初始化总访问量显示的主函数。
 */
export function initializeTotalStats() {
	// 检查显示元素是否存在，如果不存在则不执行任何操作，避免不必要的 API 请求。
	const displayElement = document.getElementById("site-stats-display");
	if (!displayElement) return;

	// 调用 fetch 函数获取数据，并在成功后调用 updateDisplay 函数更新页面。
	fetchTotalSiteStats().then((stats) => updateTotalStatsDisplay(stats));
}
