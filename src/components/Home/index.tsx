import { Link } from "../../router/Link";

export function Home() {
	return (
		<section style="padding: 2rem;">
			<h2>ホーム</h2>
			<p>Crank.jsで作った自前ルーターのデモよ。</p>
			<Link routeKey="blogs">ブログ一覧へ</Link>
		</section>
	);
}
