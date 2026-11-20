import categorieRouter from "./module/categories/catagories.route.js";
import customerRouter from "./module/customer/customer.router.js";
import orderRouter from "./module/orders/order.router.js"

import express from "express";

const Router = express.Router();

Router.use("/categorie", categorieRouter);
Router.use("/customer",customerRouter );
Router.use("/order", orderRouter);

export default Router;
