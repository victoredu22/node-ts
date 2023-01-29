import mongoose, { ConnectOptions } from "mongoose";

type DBInput = {
  db: string;
};
export default () => {
  const connect = () => {
    mongoose
      .connect(
        `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mongo:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          autoIndex: true,
        } as ConnectOptions
      )
      .then((db) => {
        console.log("Database Connected Successfuly.");
      })
      .catch((err) => {
        console.log("Error Connectiong to the Database");
      });
  };
  connect();
};
