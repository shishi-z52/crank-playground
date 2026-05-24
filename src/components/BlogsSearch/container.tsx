import type { Context } from "@b9g/crank";
import { BlogsSearchPresenter } from "./presenter";
import type { BlogsSearchCardType } from "./types/BlogsSearchCardType";

const allPosts: BlogsSearchCardType[] = [
	{
		id: 1,
		title: "Crank.jsを始めてみた",
		date: "2025-01-19",
		excerpt: "Reactとは違うアプローチのUIフレームワーク",
	},
	{
		id: 2,
		title: "ジェネレーターで状態管理",
		date: "2025-01-18",
		excerpt: "hooksを使わないシンプルな方法",
	},
	{
		id: 3,
		title: "非同期コンポーネントの魅力",
		date: "2025-01-17",
		excerpt: "async/awaitがそのまま使える",
	},
];

export function* BlogsSearch(this: Context) {
	let query = "";

	const handleSearch = (e: Event) => {
		const input = e.target as HTMLInputElement;
		query = input.value;
		// このようにthis.refresh()を呼ぶことで、明示的に再レンダリングを行うことができる。
		this.refresh();
	};

	for ({} of this) {
		const filteredPosts = allPosts.filter(
			(post) =>
				post.title.toLowerCase().includes(query.toLowerCase()) ||
				post.excerpt.toLowerCase().includes(query.toLowerCase()),
		);

		yield (
			<BlogsSearchPresenter
				posts={filteredPosts}
				query={query}
				onSearch={handleSearch}
			/>
		);
	}
}
