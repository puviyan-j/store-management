import {
  decimal,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { customerTable } from "./customer.schema.js";
import { ProductsTable } from "./products.schema.js";

export const ordersTable = pgTable("orders", {
  id: serial("id").primaryKey(),
  customer_id: integer("customer_id")
    .notNull()
    .references(() => customerTable.id),
  total_amount: decimal("total_amount").notNull(),
  status: varchar("status", { enum: ["PENDING", "PAID", "CANCELLED"] }),
  created_at: timestamp(" created_at").defaultNow(),
  product_id: integer("product_id")
    .notNull()
    .references(() => ProductsTable.id),
});
