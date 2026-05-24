import { Link } from "../../../../../router/Link";
import type { BlogsSearchCardType } from "../../../types/BlogsSearchCardType";

type BlogsSearchCardProps = BlogsSearchCardType;

export function BlogsSearchCard(post: BlogsSearchCardProps) {
	return (
		<article style="padding: 1.5rem; border: 1px solid #eee; border-radius: 8px; margin-bottom: 1rem;">
			<h2 style="margin: 0 0 0.5rem 0; font-size: 1.25rem;">
				<Link routeKey="blog" params={{ id: String(post.id) }}>
					{post.title}
				</Link>
			</h2>
			<time style="color: #888; font-size: 0.875rem;">{post.date}</time>
			<p style="margin: 0.75rem 0 0 0; color: #666;">{post.excerpt}</p>
		</article>
	);
}
