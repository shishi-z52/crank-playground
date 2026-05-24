type BlogsSearchFormProps = {
	query: string;
	onSearch: (e: Event) => void;
};

export function BlogsSearchForm(props: BlogsSearchFormProps) {
	return (
		<input
			type="text"
			value={props.query}
			oninput={props.onSearch}
			placeholder="Crank.jsのリアクティブ機能について..."
			style="width: 100%; padding: 0.75rem; font-size: 1rem; border: 1px solid #ddd; border-radius: 4px; margin-bottom: 1.5rem;"
		/>
	);
}
