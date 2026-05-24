import type { BlogsSearchCardListType } from "../../types/BlogsSearchCardListType";
import { BlogsSearchCard } from "./BlogsSearchCard/presenter";

type BlogsSearchCardListProps = BlogsSearchCardListType;

export function BlogsSearchCardList(props: BlogsSearchCardListProps) {
	return (
		<>
			{props.posts.map((post) => (
				<BlogsSearchCard key={post.id} {...post} />
			))}
		</>
	);
}
