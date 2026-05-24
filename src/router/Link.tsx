import { buildPath, navigate, type RouteKey, type RouteParams } from "./route";

type Props<K extends RouteKey> = {
	routeKey: K;
	params?: RouteParams<K>;
	children: unknown;
};

export function Link<K extends RouteKey>({
	routeKey,
	params,
	children,
}: Props<K>) {
	const handleClick = (e: MouseEvent) => {
		if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
		e.preventDefault();
		navigate(routeKey, params);
	};
	return (
		<a href={buildPath(routeKey, params)} onclick={handleClick}>
			{children}
		</a>
	);
}
