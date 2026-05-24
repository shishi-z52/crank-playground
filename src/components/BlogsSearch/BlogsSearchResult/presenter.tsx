import type { BlogsSearchCardListType } from "../types/BlogsSearchCardListType";
import { BlogsSearchCardList } from "./BlogsSearchCardList/presenter";

type BlogsSearchResultProps = BlogsSearchCardListType;

export function BlogsSearchResult(props: BlogsSearchResultProps) {
	return <BlogsSearchCardList posts={props.posts} />;
}
