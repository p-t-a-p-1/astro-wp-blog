import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "../Icons";
import { useState } from "react";
import { Form, FormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
	q: z.string().nonempty(),
});

export default function SearchButton() {
	// submitクリック後、/blog/search?q=検索ワード に遷移する
	// 例: /blog/search?q=sample

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			q: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
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
