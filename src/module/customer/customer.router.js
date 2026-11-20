import express from "express";
import { getallcategories } from "../categories/categories.controller.js";

const router = express.Router();

router.get("/", getallcategories);

export default router;
