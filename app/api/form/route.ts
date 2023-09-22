import { NextResponse } from "next/server"
import getAllForm from "@/lib/getAllForm"
import { formSchema } from "@/types/form"
import insertForm from "@/lib/insertForm"

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
		await insertForm(results.data) // pass the form data to the insertForm function
		return NextResponse.json({ success: true })
	}
	return NextResponse.json({ errors: zodError })
}
