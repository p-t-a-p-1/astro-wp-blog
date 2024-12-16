export default function BlogCard({
	imgSrc,
	url,
	title,
	description,
}: {
	imgSrc: string;
	url: string;
	title: string;
	description?: string;
}) {
	return (
		<article className="flex flex-col rounded-lg border border-gray-100 bg-background hover:bg-accent p-2 shadow-sm transition hover:shadow-lg sm:p-6">
			<a href={url}>
				<img
					src={imgSrc}
					alt={title}
					className="w-full h-48 object-cover rounded-lg aspect-auto"
				/>
				<h3 className="mt-4 text-lg font-medium text-secondary-foreground">
					{title}
				</h3>
			</a>

			<a
				href={url}
				className="group mt-2 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
			>
				More
				<span
					aria-hidden="true"
					className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
				>
					&rarr;
				</span>
			</a>
		</article>
	);
}
