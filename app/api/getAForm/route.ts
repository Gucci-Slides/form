import getAForm from "@/lib/getAForm"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
	const url = new URL(request.url)
	const id = url.searchParams.get("id")

	if (!id) {
		return NextResponse.json({ error: "No ID" }, { status: 400 })
	}

	const form = await getAForm(parseInt(id))

	if (!form || form.length === 0) {
		return NextResponse.json({ error: "Form not found" }, { status: 404 })
	}

	return NextResponse.json(form)
}
