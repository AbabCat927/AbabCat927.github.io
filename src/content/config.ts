import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		lang: z.string().optional().default(""),
		pinned: z.boolean().optional().default(false),
		author: z.string().optional().default(""),
		sourceLink: z.string().optional().default(""),
		licenseName: z.string().optional().default(""),
		licenseUrl: z.string().optional().default(""),

		// 【在这里添加这一行，以修复总字数为 0 的问题】
		// 作用：正式声明 wordCount 字段的存在，
		// 这样 Astro 在构建时就会保留由 remark 插件计算出的字数，
		// 从而让侧边栏等组件可以通过 getCollection 获取到正确的字数值。

		/* Page encryption fields */
		encrypted: z.boolean().optional().default(false),
		password: z.string().optional().default(""),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});

const specCollection = defineCollection({
	schema: z.object({}),
});

export const collections = {
	posts: postsCollection,
	spec: specCollection,
};
