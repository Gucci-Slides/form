import { NextResponse } from "next/server"
import getAllForms from "@/lib/getAllForms"

export async function GET(request: Request) {
	const forms = await getAllForms()

	return NextResponse.json(forms)
}
