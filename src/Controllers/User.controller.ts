import User, { IUser } from "../Models/User.model";
import { RequestHandler, response } from "express";

interface ICreateUserInput {
  email: IUser["email"];
  firstName: IUser["firstName"];
  lastName: IUser["lastName"];
}

interface ErrorString {
  name: string;
  message: string;
  stack?: string;
  code: number;
}
const CreateUser: RequestHandler = async (req, res, next) => {
  const data: ICreateUserInput = req.body;

  try {
    const user = await User.create(data);

    return res.status(201).json({ user });
  } catch (e) {
    const error = e as ErrorString;
    if (error.code === 11000) {
      return res.status(400).json({ status: "Duplicate user" });
    }
    return res.status(500).json({ status: "UNKNOWN ERROR" });
  }
};

const getUser: RequestHandler = async (req, res, next) => {
  const user = await User.find({});
  res.status(201).json({ user });
};

export default {
  CreateUser,
  getUser,
};
