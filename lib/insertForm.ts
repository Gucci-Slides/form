import { connect } from "@planetscale/database"
import { config } from "@/db/config"
import { drizzle } from "drizzle-orm/planetscale-serverless"
import { formSchemaType } from "@/types/form"
import { formdata } from "@/db/schema"

export default async function insertForm(form: formSchemaType) {
	const conn = connect(config)
	const db = drizzle(conn)
	const results = await db.insert(formdata).values(form)
	return results
}
