import { relations } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import users from "./users";
const tenants = pgTable("tenants", {
    id: uuid("id").primaryKey(),
    name: text("name").notNull(),
    userId: uuid("userId").references(() => users.id).notNull(),
});

export const tenantsRelations = relations(tenants, ({ one }) => ({
    user: one(users, {
        fields: [tenants.userId],
        references: [users.id],
    }),
}));

export default tenants;
