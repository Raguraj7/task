import { NextFunction, Request, Response } from 'express';
import mongodb from '../../mongodb';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password, phonenumber, email } = res.locals.reqdata;

  if (!username || !password || !phonenumber) {
    res.status(400).send({ status: 400, message: 'Please give all values.' });
    return;
  }

  const db = await mongodb();

  const exist = await db?.collection('Register').findOne(
    {
      username,
    },
    { projection: { _id: 1 } }
  );
  if (exist) {
    res.status(400).send({ status: 400, message: 'User already exist.' });
    return;
  }

  const register = await db?.collection('Register').insertOne({
    username,
    password,
    phonenumber,
    email,
    registeredat: new Date(),
  });
  if (!register) {
    res.status(400).send({ status: 400, message: 'Error from user register.' });
  }
  res
    .status(201)
    .send({ status: 201, message: 'User successfully registered.' });
};
