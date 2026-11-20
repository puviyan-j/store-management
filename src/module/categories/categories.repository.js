import { db } from "../../database/database.js";
import { categoriesTable } from "../../database/schema/index.js";

export const getallcategory = async () => {
    return await db.select().from(categoriesTable)
};
