import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "../Icons";
import { Form, FormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
	q: z.string().nonempty(),
});

export default function SearchButton() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			q: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		if (!values.q) return;

		// ページ遷移
		window.location.href = `/blog/search?q=${values.q}`;
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex w-full max-w-sm items-center space-x-2"
			>
				<FormField
					control={form.control}
					name="q"
					render={({ field }) => (
						<Input type="text" placeholder="サイト内検索" {...field} />
					)}
				/>
				<Button color="primary">
					<Icons.search fill="currentColor" />
				</Button>
			</form>
		</Form>
	);
}
