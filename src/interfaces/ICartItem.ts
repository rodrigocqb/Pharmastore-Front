import IProduct from "./IProduct";

export interface ICartItem {
  _id: string;
  user_identifier: string;
  product: IProduct;
}

export type CreateCartItem = Omit<ICartItem, "_id">;

export type DeleteItemParams = {
  user_identifier: string;
  productName: string;
};
