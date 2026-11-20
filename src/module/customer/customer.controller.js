import { count, eq } from "drizzle-orm";
import { customerTable, ordersTable } from "../../database/schema";

export const getcustomerbyname = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name.trim()) throw { Message: "name not be empty", code: 400 };

    const data = await getcustomerbynameservice(name);

    res.json({ message: "successfull", data });
  } catch (error) {
    throw error;
  }
};

export const customertoteloerer = async (req, res) => {
  const { id } = req.params;
  try {
    const [count] = await db
      .select(count())
      .from(ordersTable)
      .where(eq(ordersTable.customer_id, id));

    const [customer] = await db
      .select()
      .from(customerTable)
      .where(eq(customerTable.id, id));

    res.json({ count, customer });
  } catch (error) {
    throw error;
  }
};
