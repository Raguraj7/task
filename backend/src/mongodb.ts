import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import { CustomError } from './common/errorhandler';
dotenv.config();

const connectionString = process.env.MONGO_URL
  ? process.env.MONGO_URL
  : 'mongodb://localhost:27017';
console.log('connectionstring', connectionString);

const client = new MongoClient(connectionString, {
  connectTimeoutMS: 5000,
  socketTimeoutMS: 5000,
  serverSelectionTimeoutMS: 5000,
  // maxPoolSize: 5,
});

const mongodb = async () => {
  let db;
  try {
    const connect = await client.connect();
    db = connect.db('task');
    console.log('DB connected succesfully');

    return db;
  } catch (error: any) {
    console.log('error from db connetced', error.message);
    throw new CustomError('Error from mongodb connection', 500);
  }
};
export default mongodb;
