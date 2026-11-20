import { eq } from "drizzle-orm";
import { db } from "../../database/database.js";
import { categoriesTable, customerTable } from "../../database/schema/index.js";

export const getcustomerbyname = async (name) => {
  return await db.select().from(customerTable).where(eq(customerTable.name, name));
};
