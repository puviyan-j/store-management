import { getcustomerbyname } from "./customer.repository.js";

export const getcustomerbynameservice = async (name) => {
  const data = await getcustomerbyname(name);
  return data;
};
