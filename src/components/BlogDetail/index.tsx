import { Link } from "../../router/Link";

type Props = {
	id: string;
};

export function BlogDetail({ id }: Props) {
	return (
		<section style="padding: 2rem;">
			<h2>ブログ詳細</h2>
			<p>記事ID: {id}</p>
			<Link routeKey="blogs">一覧に戻る</Link>
		</section>
	);
}
