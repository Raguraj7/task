import { MongoClient } from 'mongodb';
import { CustomError } from './common/errorhandler';

const client = new MongoClient('mongodb://localhost:27017', {
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
