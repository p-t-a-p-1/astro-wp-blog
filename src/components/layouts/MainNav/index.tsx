import * as React from "react";

import { Icons } from "@/components/elements/Icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";

interface MainNavProps {
	items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
	return (
		<div className="flex gap-6 md:gap-10">
			<a href="/" className="flex items-center space-x-2">
				<Icons.logo className="h-6 w-6" />
				<span className="inline-block font-bold">{siteConfig.name}</span>
			</a>
			{items?.length ? (
				<nav className="flex gap-6">
					{items?.map(
						(item, index) =>
							item.href && (
								<a
									key={`nav-item-${item.title}`}
									href={item.href}
									className={cn(
										"flex items-center text-sm font-medium text-muted-foreground",
										item.disabled && "cursor-not-allowed opacity-80",
									)}
								>
									{item.title}
								</a>
							),
					)}
				</nav>
			) : null}
		</div>
	);
}
