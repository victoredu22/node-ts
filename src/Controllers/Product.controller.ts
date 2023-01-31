import { RequestHandler } from "express";
import Product from "../Models/Product.model";
import { ErrorString } from "../Types/errors";
import { ICreateProductInput } from "../Types/product";

const Create: RequestHandler = async (req, res) => {
  try {
    const data: ICreateProductInput = req.body;
    const product = await Product.create(data);

    return res.status(201).json({ product });
  } catch (e) {
    const error = e as ErrorString;
    if (error.code === 11000) {
      return res.status(400).json({ status: "Duplicate user" });
    }
    return res.status(500).json({ status: "UNKNOWN ERROR" });
  }
};

const Index: RequestHandler = async (req, res, next) => {
  try {
    const product = await Product.find({});
    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ msg: "Error" });
  }
};

const Show: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    return res.status(201).json({ product });
  } catch (error) {
    return res.status(500).json({ msg: "Error" });
  }
};

export default {
  Create,
  Index,
  Show,
};
