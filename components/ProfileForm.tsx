"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
	firstName: z
		.string()
		.min(2, {
			message: "First Name must be at least 2 characters",
		})
		.refine((val) => val.length > 0, {
			message: "Please enter your first name",
		}),
	lastName: z
		.string()
		.min(2, {
			message: "Last Name must be at least 2 characters",
		})
		.refine((val) => val.length > 0, {
			message: "Please enter your last name",
		}),
	email: z
		.string()
		.email()
		.min(5, {
			message: "E-mail must be at least 5 characters",
		})
		.refine((val) => val.length > 0, {
			message: "Please enter your email",
		}),
})

const ProfileForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
		},
	})

	const descriptions: Record<string, string> = {
		firstName: "John",
		lastName: "Doe",
		email: "johndoe@example.com",
	}

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values)
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='grid gap-4 grid-cols-1'
			>
				{Object.entries(formSchema.shape).map(([key, value]) => (
					<FormField
						key={key}
						control={form.control}
						name={key as keyof (typeof formSchema)["_def"]["shape"]}
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									{key
										.replace(/([a-z])([A-Z])/g, "$1 $2")
										.replace(
											/([A-Z])([A-Z][a-z])/g,
											"$1 $2"
										)
										.replace(/^./, (str) =>
											str.toUpperCase()
										)}
								</FormLabel>
								<FormControl>
									<Input
										placeholder={
											descriptions[
												key as keyof (typeof formSchema)["_def"]["shape"]
											]
										}
										{...field}
									/>
								</FormControl>
								<FormDescription>
									{value._def?.description ?? ""}
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				))}
				<Button type='submit' className=''>
					Submit
				</Button>
			</form>
		</Form>
	)
}
export default ProfileForm
