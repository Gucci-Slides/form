import { NextResponse } from "next/server"
import getAllForm from "@/lib/getAllForm"
import { formSchema } from "@/types/form"
import insertForm from "@/lib/insertForm"
import { DatabaseError } from "@planetscale/database"

export async function GET(request: Request) {
	const forms = await getAllForm()

	return NextResponse.json(forms)
}

export async function POST(request: Request) {
	const body: unknown = await request.json()
	const results = formSchema.safeParse(body)
	let zodError = {}
	if (!results.success) {
		results.error.issues.forEach((issue) => {
			zodError = { ...zodError, [issue.path[0]]: issue.message }
		})
	}
	if (results.success) {
		try {
			await insertForm(results.data)
			return NextResponse.json({ success: true })
		} catch (error) {
			if (
				error instanceof DatabaseError &&
				error.message.includes("Duplicate entry")
			) {
				return NextResponse.json(
					{
						errors: {
							email: "Email already exists",
							status: 409,
						},
					},
					{ status: 409 }
				)
			}
			throw error
		}
	}
	return NextResponse.json({ errors: zodError })
}
