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
import { NextResponse } from "next/server"

const ProfileForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
		},
	})
	const { toast } = useToast()

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const response = await fetch("/api/insertForm", {
			method: "POST",
			body: JSON.stringify(values),
			headers: {
				"Content-Type": "application/json",
			},
		})
		if (!response.ok) {
			form.setError("root.serverError", {
				type: response.status.toString(),
			})
		}
		const responseData = await response.json()
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
			} else
				toast({
					title: "Error",
					description: "An unknown error occurred",
				})
		}
		if (responseData.success) {
			toast({
				title: "Success",
				description: "You have successfully submitted the form",
			})
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
				<FormField
					control={form.control}
					name='firstName'
					render={({ field }) => (
						<FormItem>
							<FormLabel>First Name</FormLabel>
							<FormControl>
								<Input placeholder='John' {...field} />
							</FormControl>
							<FormDescription></FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='lastName'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Last Name</FormLabel>
							<FormControl>
								<Input placeholder='Doe' {...field} />
							</FormControl>
							<FormDescription></FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder='johndoe@example.com'
									{...field}
								/>
							</FormControl>
							<FormDescription></FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit' disabled={form.formState.isSubmitting}>
					{form.formState.isSubmitting ? "Submitting..." : "Submit"}
				</Button>
			</form>
		</Form>
	)
}
export default ProfileForm
