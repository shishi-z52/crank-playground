export const routes = {
	home: "/",
	blogs: "/blogs",
	blog: "/blogs/:id",
} as const;

export type RouteKey = keyof typeof routes;

type ExtractParams<Path extends string> =
	Path extends `${string}:${infer Key}/${infer Rest}`
		? { [_ in Key | keyof ExtractParams<Rest>]: string }
		: Path extends `${string}:${infer Key}`
			? { [_ in Key]: string }
			: Record<string, never>;

export type RouteParams<K extends RouteKey> = ExtractParams<(typeof routes)[K]>;

export type Match = {
	[K in RouteKey]: { key: K; params: RouteParams<K> };
}[RouteKey];

const PARAM = /:([A-Za-z0-9_]+)/g;

export const buildPath = <K extends RouteKey>(
	key: K,
	params?: RouteParams<K>,
): string =>
	routes[key].replace(PARAM, (_, name: string) =>
		encodeURIComponent((params as Record<string, string>)[name]),
	);

export const matchRoute = (pathname: string): Match | null => {
	for (const key of Object.keys(routes) as RouteKey[]) {
		const keys: string[] = [];
		const pattern = routes[key].replace(PARAM, (_, name: string) => {
			keys.push(name);
			return "([^/]+)";
		});
		const result = new RegExp(`^${pattern}/?$`).exec(pathname);
		if (!result) continue;
		const params = Object.fromEntries(
			keys.map((name, i) => [name, decodeURIComponent(result[i + 1])]),
		);
		return { key, params } as Match;
	}
	return null;
};

export const NAVIGATE_EVENT = "navigate";

export const navigate = <K extends RouteKey>(
	key: K,
	params?: RouteParams<K>,
): void => {
	window.history.pushState({}, "", buildPath(key, params));
	window.dispatchEvent(new CustomEvent(NAVIGATE_EVENT));
};
