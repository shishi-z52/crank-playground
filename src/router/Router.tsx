import type { Context } from "@b9g/crank";
import { BlogDetail } from "../components/BlogDetail";
import { BlogsSearch } from "../components/BlogsSearch/container";
import { Home } from "../components/Home";
import { matchRoute, NAVIGATE_EVENT } from "./route";

export function* Router(this: Context) {
	const refresh = () => this.refresh();
	window.addEventListener("popstate", refresh);
	window.addEventListener(NAVIGATE_EVENT, refresh);
	this.cleanup(() => {
		window.removeEventListener("popstate", refresh);
		window.removeEventListener(NAVIGATE_EVENT, refresh);
	});

	for ({} of this) {
		const match = matchRoute(window.location.pathname);
		if (!match) {
			yield (
				<section style="padding: 2rem;">
					<h2>404 Not Found</h2>
				</section>
			);
			continue;
		}
		switch (match.key) {
			case "home":
				yield <Home />;
				break;
			case "blogs":
				yield <BlogsSearch />;
				break;
			case "blog":
				yield <BlogDetail id={match.params.id} />;
				break;
		}
	}
}
