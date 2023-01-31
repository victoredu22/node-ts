import { IProduct } from "../Models/Product.model";

export type ICreateProductInput = {
  active: IProduct["active"];
  picture: IProduct["picture"];
  brand: IProduct["brand"];
  title: IProduct["title"];
  description: IProduct["description"];
  price: IProduct["price"];
  offerDiscount: IProduct["offerDiscount"];
  shipping: IProduct["shipping"];
  levelStars: IProduct["levelStars"];
  stock: IProduct["stock"];
  publicationDate: IProduct["publicationDate"];
  inCart: IProduct["inCart"];
};
