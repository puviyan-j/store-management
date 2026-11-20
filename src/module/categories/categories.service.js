import { getallcategory } from "./categories.repository.js";

export const getallcategoriesservice = async () => {
  const data = await getallcategory();
  return data
};
