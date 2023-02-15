'use-strict';
import dotenv from "dotenv";
import mongoose from 'mongoose';

dotenv.config();

const uri =
  process.env.CONNECTION_DB !== undefined
    ? process.env.CONNECTION_DB
    : 'mongodb://127.0.0.1:27017/shortener';

mongoose.set('strictQuery', true);
mongoose.connect(uri).then(()=> console.log('Connected to DB')).catch((error) => console.log(error));

export default mongoose;