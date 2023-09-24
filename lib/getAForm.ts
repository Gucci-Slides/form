import { connect } from "@planetscale/database"
import { config } from "@/db/config"
import { drizzle } from "drizzle-orm/planetscale-serverless"
import { formSchemaType } from "@/types/form"
import { formdata } from "@/db/schema"
import { eq } from "drizzle-orm"

interface getAForm extends formSchemaType {
	id: number
}

export default async function getAForm(id: number) {
	const conn = connect(config)
	const db = drizzle(conn)

	const results: getAForm[] = await db
		.select({
			id: formdata.id,
			firstName: formdata.firstName,
			lastName: formdata.lastName,
			email: formdata.email,
		})
		.from(formdata)
		.where(eq(formdata.id, id))
	return results
}
