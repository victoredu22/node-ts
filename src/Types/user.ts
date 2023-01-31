import User, { IUser } from "../Models/User.model";

export type ICreateUserInput = {
  email: IUser["email"];
  firstName: IUser["firstName"];
  lastName: IUser["lastName"];
};
