import mongoose from "mongoose";
interface IConnection {
  readyState: number;
}

const connection: IConnection = { readyState: 0 };

const dbConnect = async (): Promise<void> => {
  if (connection.readyState === 1) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  connection.readyState = db.connections[0].readyState;
};

export default dbConnect;
