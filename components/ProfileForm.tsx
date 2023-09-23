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
import { formSchema } from "@/types/form"
import { toast, useToast } from "@/components/ui/use-toast"

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

	const { toast } = useToast()

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const response = await fetch("/api/form", {
			method: "POST",
			body: JSON.stringify(values),
			headers: {
				"Content-Type": "application/json",
			},
		})
		const responseData = await response.json()

		if (!response.ok) {
			throw new Error(responseData.message)
		}

		if (responseData.errors) {
			const errors = responseData.errors
			if (errors.email) {
				form.setError("email", {
					type: "server",
					message: errors.email,
				})
			} else if (errors.firstName) {
				form.setError("firstName", {
					type: "server",
					message: errors.firstName,
				})
			} else if (errors.lastName) {
				form.setError("lastName", {
					type: "server",
					message: errors.lastName,
				})
			}
		} else {
			return (
				toast({
					description: "Your form has been submitted!",
				}),
				form.reset()
			)
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
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
				<Button type='submit' disabled={form.formState.isSubmitting}>
					{form.formState.isSubmitting ? "Submitting..." : "Submit"}
				</Button>
			</form>
		</Form>
	)
}
export default ProfileForm
