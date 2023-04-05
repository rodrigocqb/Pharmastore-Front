import { Category } from "../interfaces/IProduct";
import { get } from "./api";

export async function getCategories(): Promise<Category[]> {
  const response = await get("/categories");
  return response.data as Category[];
}
