import { getIdentifier } from "../helpers/identifier";
import { CreateCartItem, ICartItem } from "../interfaces/ICartItem";
import { deleteReq, get, post } from "./api";

export async function getCart(): Promise<ICartItem[]> {
  const response = await get("/carts", {
    headers: { Authorization: getIdentifier() },
  });
  return response.data as ICartItem[];
}

export async function postCartItem(body: CreateCartItem): Promise<void> {
  await post("/carts", body);
  return;
}

export async function deleteCartItem(productName: string): Promise<void> {
  const config = {
    headers: { Authorization: getIdentifier(), productName },
  };
  await deleteReq("/carts", config);
  return;
}
