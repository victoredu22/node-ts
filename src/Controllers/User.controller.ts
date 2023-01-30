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
  try {
    const data: ICreateUserInput = req.body;
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

const index: RequestHandler = async (req, res, next) => {
  try {
    const user = await User.find({});
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ msg: "Error" });
  }
};

const upsert: RequestHandler = async (req, res, next) => {
  const { email, firstName, lastName } = req.body;

  const user = await User.find({ email });

  try {
    await User.findByIdAndUpdate(
      { email },
      {
        $set: {
          firstName,
          lastName,
        },
      },
      { upsert: true, new: true }
    );

    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ msg: "Error" });
  }
};

const show: RequestHandler = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findById(email);

    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ msg: "Error" });
  }
};

export default {
  CreateUser,
  index,
  upsert,
  show,
};
