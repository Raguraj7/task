import express from 'express';
import mongodb from './mongodb';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.get('/hello', async () => {
  const db: any = await mongodb();
  // const data = await db
  //   .collection('sample')
  //   .find({}, { projection: { _id: 0 } })
  //   .toArray();
  // console.log('qqq', data);
});
import appRoutes from './appRoutes';
import ErrorHandler from './common/errorhandler';
app.use(appRoutes);
app.use(ErrorHandler);
app.listen(3001, () => {
  console.log('jiii');
});
