import User, { IUser } from "../Models/User.model";
import { RequestHandler, response } from "express";
import { ICreateUserInput } from "../Types/user";
import { ErrorString } from "../Types/errors";

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
  try {
    const { email, firstName, lastName } = req.body;

    const user = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          firstName,
          lastName,
        },
      },
      { upsert: true, new: true }
    );
    console.log(user);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ msg: "Error" });
  }
};

const show: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;
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
