import { getallcategoriesservice } from "./categories.service.js";

export const getallcategories = async (req, res) => {
  try {
    const data = getallcategoriesservice();

    res.json({
      message: "successfull",
      data,
    });
  } catch (error) {
    throw error;
  }
};
