import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  active: Boolean;
  picture: Number;
  brand: Number;
  title: String;
  description: String;
  price: Number;
  offerDiscount: Boolean;
  shipping: Boolean;
  levelStars: Number;
  stock: Number;
  publicationDate: Date;
  inCart: Number;
}
const ProductSchema: Schema = new Schema(
  {
    active: {
      type: Boolean,
      required: true,
    },
    brand: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    offerDiscount: {
      type: Number,
      required: true,
    },
    shipping: {
      type: Boolean,
      required: true,
    },
    levelStars: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    publicationDate: {
      type: Date,
      Required: true,
    },
    inCart: {
      type: Number,
      Required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export default mongoose.model<IProduct>("Product", ProductSchema);
