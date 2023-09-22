import {
	mysqlTable,
	mysqlSchema,
	AnyMySqlColumn,
	primaryKey,
	unique,
	int,
	varchar,
} from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const formdata = mysqlTable(
	"formdata",
	{
		id: int("id").autoincrement().notNull(),
		firstName: varchar("firstName", { length: 255 }).notNull(),
		lastName: varchar("lastName", { length: 255 }).notNull(),
		email: varchar("email", { length: 255 }).notNull(),
	},
	(table) => {
		return {
			formdataId: primaryKey(table.id),
			email: unique("email").on(table.email),
		}
	}
)
