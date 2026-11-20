import { and, count, eq, gt, lt, sql } from "drizzle-orm";
import { db } from "../../database/database.js";
import { ordersTable, ProductsTable } from "../../database/schema/index.js";

export const getorders = async (req, res) => {
  try {
    const { customerId } = req.params;

    if (!customerId) throw { message: "customerId not found", code: 400 };

    const data = await db
      .select()
      .from(ordersTable)
      .where(eq(ordersTable.customer_id, customerId));

    res.json({ data });
  } catch (error) {
    throw error;
  }
};

export const getolderOrder = async (req, res) => {
  try {
    const date = new Date();
    const currentdate = date.getDate();

    const olderdate = new Date().setDate(currentdate - 7);

    const data = await db
      .select()
      .from(ordersTable)
      .where(
        and(
          eq(ordersTable.status, "PENDING"),
          lt(ordersTable.created_at, olderdate),
        ),
      );

    res.json({ data });
  } catch (error) {
    throw error;
  }
};

export const cancellorder = async (req, res) => {
  try {
    const { orderId } = req.params;

    await db.transaction(async (tx) => {
      const [order] = await tx
        .update(ordersTable)
        .set(ordersTable.status, "CANCELLED")
        .where(eq(ordersTable.id, orderId))
        .returning();

      if (!order) throw { message: "no order found", code: 400 };

      const [product] = await tx
        .select(ProductsTable.stock)
        .from(ProductsTable)
        .where(eq(ProductsTable.id, order.product_id));

      const updateproduct = await tx
        .update(ProductsTable)
        .set(ProductsTable.stock, product.stock + 1)
        .where(eq(ProductsTable.id, order.product_id));
    });
  } catch (error) {
    throw error;
  }
};

export const getordersfromrange = async (req, res) => {
  try {
    const currentdate = new Date();
    await db
      .select(count({ order: ordersTable.product_id }))
      .from(ordersTable)
      .where(
        gt(
          ordersTable.created_at,
          new Date().setDate(currentdate.getDate - 30),
        ),
      )
      .orderBy(order);
  } catch (error) {
    throw error;
  }
};

export const products = async (req, res) => {
  try {
    const data = await db
      .select()
      .from(ProductsTable)
      .rightJoin(ordersTable, eq(ProductsTable.id, ordersTable.product_id))
      .groupBy(sql`${ordersTable.product_id}`)
    //   .having(sql`${ordersTable.product_id} is null`)

    res.json({ data });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
