import { BlogsSearchForm } from "./BlogsSearchForm/presenter";
import { BlogsSearchResult } from "./BlogsSearchResult/presenter";
import type { BlogsSearchCardType } from "./types/BlogsSearchCardType";

type BlogsSearchPresenterProps = {
	posts: BlogsSearchCardType[];
	query: string;
	onSearch: (e: Event) => void;
};

export function BlogsSearchPresenter(props: BlogsSearchPresenterProps) {
	return (
		<div style="max-width: 800px; margin: 0 auto; padding: 2rem;">
			<BlogsSearchForm query={props.query} onSearch={props.onSearch} />
			<BlogsSearchResult posts={props.posts} />
		</div>
	);
}
