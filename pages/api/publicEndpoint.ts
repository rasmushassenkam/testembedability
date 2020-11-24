import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../models/User";
import dbConnect from "../../utils/dbConnect";
import Cors from "cors";
import initMiddleware from "../../utils/initMiddleware";

const cors = initMiddleware(
  Cors({
    origin: ["http://localhost:3006"],
  })
);

dbConnect();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);
  switch (req.method) {
    case "GET": {
      const users = await User.find();
      return res.send(users);
    }
    default: {
      return res.send("Wrong request type");
    }
  }
};

export default handler;
