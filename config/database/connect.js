import mongoose from "mongoose";

const db_connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Database Is Connected 😍".blue);
  } catch (error) {
    console.log(error);
  }
};

export default db_connect;
