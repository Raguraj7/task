import { NextFunction, Request, Response } from 'express';
import mongodb from '../mongodb';
import { ObjectId } from 'mongodb';
import { catchAsync } from './errorhandler';

export const reqMethodValidate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('reqmethod', req.method);
  if (req.method === 'POST') {
    console.log('body', req.body);

    if (Object.keys(req.body).length === 0) {
      res
        .status(400)
        .send({ status: 400, message: 'Request data is required.' });
      return;
    }
  }

  next();
  return;
};

export const getReqData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('reqmethod', req.method);
  if (req.method === 'POST') {
    res.locals.reqdata = req.body;
  } else {
    res.locals.reqdata = req.query;
  }
  console.log(res.locals);

  next();
  return;
};

export const verifyUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    console.log('authorization', authorization);

    const token = authorization?.split(' ')[1];

    console.log('token', token);
    if (!token) {
      res.status(401).send({ status: 401, message: 'Token not found' });
      return;
    }

    const db = await mongodb();
    const userCheck = await db
      ?.collection('Register')
      .findOne({ _id: new ObjectId(token) }, { projection: { _id: 1 } });
    console.log('usercheck', userCheck);

    if (!userCheck) {
      res.status(401).send({ status: 401, message: 'User not found' });
      return;
    }

    res.locals = { ...res.locals, userid: token };
    console.log('j');

    next();
    return;
  }
);

export const validator =
  (validator: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    console.log('validator', res.locals.reqdata);
    try {
      await validator(res.locals.reqdata);
    } catch (error: any) {
      console.log('errorqqq', error.message);
      res.status(400).send({ status: 400, message: error.message });
      return;
    }

    next();
    return;
  };
