import express from "express";
import { cancellorder, getolderOrder, getorders, getordersfromrange, products } from "./orders.controller.js";

const router = express.Router();

router.get("/order", getolderOrder);
router.get("/cancell", cancellorder);
router.get("/getrangeorders", getordersfromrange);
router.get("/products", products);
router.get("/:customerId", getorders);

export default router;
