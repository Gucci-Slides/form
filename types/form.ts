import { z } from "zod"

export const formSchema = z.object({
	firstName: z
		.string()
		.min(2, {
			message: "First Name must be at least 2 characters",
		})
		.max(20, {
			message: "First Name must be less than 20 characters",
		})
		.refine((val) => val.length > 0, {
			message: "Please enter your first name",
		}),
	lastName: z
		.string()
		.min(2, {
			message: "Last Name must be at least 2 characters",
		})
		.max(20, {
			message: "Last Name must be less than 20 characters",
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

export type formSchemaType = z.infer<typeof formSchema>
