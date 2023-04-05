export default interface IProduct {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
}

export type Category = {
  _id: string;
  name: string;
};
