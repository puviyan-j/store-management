import {
  decimal,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { categoriesTable } from "./categories.schema.js";

export const ProductsTable = pgTable("products", {
  id: serial("id").primaryKey(),
  category_id: integer("category_id").references(() => categoriesTable.id),
  name: varchar("name", { length: 150 }).notNull(),
  price: decimal("price").notNull(),
  stock: integer("stock").notNull(),
  created_at: timestamp(" created_at").defaultNow(),
});
