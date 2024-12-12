import { pgTable, pgPolicy, varchar, json, uuid, boolean, pgSequence } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"


export const usersIdSeq = pgSequence("users_id_seq", {  startWith: "1", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false })
export const payloadPreferencesIdSeq = pgSequence("payload_preferences_id_seq", {  startWith: "1", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false })
export const payloadPreferencesRelsIdSeq = pgSequence("payload_preferences_rels_id_seq", {  startWith: "1", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false })
export const payloadLockedDocumentsIdSeq = pgSequence("payload_locked_documents_id_seq", {  startWith: "1", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false })
export const payloadLockedDocumentsRelsIdSeq = pgSequence("payload_locked_documents_rels_id_seq", {  startWith: "1", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false })
export const likesIdSeq = pgSequence("likes_id_seq", {  startWith: "1", increment: "1", minValue: "1", maxValue: "9223372036854775807", cache: "1", cycle: false })

export const sheets = pgTable("sheets", {
	id: varchar().primaryKey().notNull(),
	name: varchar(),
	payload: json(),
	accessTags: uuid("access_tags").array(),
	published: boolean().default(true),
}, (table) => {
	return {
		allowAdminUserFullAccess: pgPolicy("Allow admin user full access", { as: "permissive", for: "all", to: ["authenticated"], using: sql`(get_my_claim('userrole'::text) = '"admin"'::jsonb)`, withCheck: sql`(get_my_claim('userrole'::text) = '"admin"'::jsonb)`  }),
		sheetAccessViaAccessTag: pgPolicy("Sheet access via access tag", { as: "permissive", for: "select", to: ["authenticated"] }),
	}
});
