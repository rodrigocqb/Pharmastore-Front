import IProduct from "../interfaces/IProduct";
import { get } from "./api";

export async function getAllProducts(): Promise<IProduct[]> {
  const response = await get("/products");
  return response.data as IProduct[];
}

export async function getProductData(id: string): Promise<IProduct> {
  const response = await get(`/products/${id}`);
  return response.data as IProduct;
}

export async function searchProducts(query: string): Promise<IProduct[]> {
  const response = await get(`/search?searchParam=${query}`);
  return response.data as IProduct[];
}
