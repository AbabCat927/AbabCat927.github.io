// ---------------------------------
// declare global { ... } 是一个特殊的 TypeScript 语法块。
// 它的作用是创建一个“环境模块声明”，
// 明确告诉编译器，这里面的所有代码都是用来“扩大”或“增强”全局作用域的。
// ---------------------------------
declare global {
	// 增强 HTMLElementTagNameMap 接口，为自定义 HTML 元素提供类型提示
	interface HTMLElementTagNameMap {
		"table-of-contents": HTMLElement & {
			init?: () => void;
		};
	}

	// 增强全局的 Window 接口，为 window 对象添加自定义属性
	interface Window {
		// 【关键修正】
		// 我们在 `swup: any;` 这一行的正上方，添加了一行特殊的注释。
		// `// biome-ignore lint/suspicious/noExplicitAny: <explanation>` 是 Biome 的官方语法，
		// 它的作用是告诉 Biome 检查器：“请忽略紧随其后的这一行代码中关于 `noExplicitAny` 规则的警告。”
		// `reason`: 后面是我们给出的理由，说明为什么我们要这样做。
		// biome-ignore lint/suspicious/noExplicitAny: Swup's type is complex and not essential for this project's type safety.
		swup: any;

		// 为 pagefind 搜索库定义类型
		pagefind: {
			search: (query: string) => Promise<{
				results: Array<{
					data: () => Promise<SearchResult>;
				}>;
			}>;
		};

		mobileTOCInit?: () => void;
	}
}

// ---------------------------------
// SearchResult 接口的定义本身是正确的，
// 它可以放在 declare global 块的内部或外部。
// 放在外部，意味着它不是一个全局类型，需要在使用时导入，这通常是更好的实践。
// ---------------------------------
interface SearchResult {
	url: string;
	meta: {
		title: string;
	};
	excerpt: string;
	content?: string;
	word_count?: number;
	filters?: Record<string, unknown>;
	anchors?: Array<{
		element: string;
		id: string;
		text: string;
		location: number;
	}>;
	weighted_locations?: Array<{
		weight: number;
		balanced_score: number;
		location: number;
	}>;
	locations?: number[];
	raw_content?: string;
	raw_url?: string;
	sub_results?: SearchResult[];
}

// ---------------------------------
// 这一行代码是解决 "declare global" 报错的“魔法咒语”。
// 它的存在会立刻让 TypeScript 将这个文件从“全局脚本”识别为“模块”。
// ---------------------------------
export {};
