import { NextApiRequest, NextApiResponse } from "next";
import { NextApiRequestQuery } from "next/dist/next-server/server/api-utils";
import { User } from "../../models/User";
import dbConnect from "../../utils/dbConnect";

dbConnect();

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    User.find().exec((err, users) => {
      if (err) {
        reject(err);
      }
      resolve(users);
    });
  });
};
