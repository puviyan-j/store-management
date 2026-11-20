import {  pgTable,  serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const customerTable = pgTable("customer", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 150 }).notNull(),
  phone: varchar("phone", { length: 120 }).notNull(),
  created_at: timestamp(" created_at").defaultNow(),
});
