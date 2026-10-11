// year used to sort entries without an explicit order: start_date, falling back to 11ty's page date
// (the frontmatter date if set, otherwise the file creation time)
const sortYear = (item) => item.data.start_date ?? item.page.date.getUTCFullYear();

// entries with an order field come first, the rest are newest first
const byOrderThenNewest = (a, b) => {
	const aOrder = a.data.order;
	const bOrder = b.data.order;
	if (aOrder != null && bOrder != null) return aOrder - bOrder;
	if (aOrder != null) return -1;
	if (bOrder != null) return 1;
	return sortYear(b) - sortYear(a);
};

export default function (eleventyConfig) {
	eleventyConfig.addCollection("portfolio", (collectionApi) =>
		collectionApi.getFilteredByGlob("./11ty/src/portfolio/*.md").sort(byOrderThenNewest),
	);
	eleventyConfig.addPassthroughCopy("11ty/src/img");
}
