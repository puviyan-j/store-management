import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const categoriesTable = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  description: text("description"),
  created_at: timestamp(" created_at").defaultNow(),
});
