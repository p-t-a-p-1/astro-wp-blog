import { Icons } from "@/components/elements/Icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { MainNav } from "../MainNav";

export default function Header() {
	return (
		<header className="bg-background sticky top-0 z-40 w-full border-b">
			<div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 mx-auto">
				<MainNav items={siteConfig.mainNav} />
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-1">
						<a href={siteConfig.links.github} target="_blank" rel="noreferrer">
							<div
								className={buttonVariants({
									size: "icon",
									variant: "ghost",
								})}
							>
								<Icons.gitHub className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</div>
						</a>
						<a href={siteConfig.links.x} target="_blank" rel="noreferrer">
							<div
								className={buttonVariants({
									size: "icon",
									variant: "ghost",
								})}
							>
								<Icons.x className="h-5 w-5 fill-current" />
								<span className="sr-only">X</span>
							</div>
						</a>
					</nav>
				</div>
			</div>
		</header>
	);
}
