import { NextFunction, Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import mongodb from '../mongodb';
import { CustomError, catchAsync } from './errorhandler';
import { jwtVerifyToken } from './jwtFns';

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
  // console.log('reqmethod', req.method);
  if (req.method === 'POST') {
    res.locals.reqdata = req.body;
  } else {
    res.locals.reqdata = req.query;
  }
  console.log(res.locals);

  next();
  return;
};

export const verifyToken = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    const token = authorization?.split(' ')[1] as string;

    if (!token) {
      res.status(401).send({ status: 401, message: 'Token not found' });
      return;
    }

    const verify: any = jwtVerifyToken(token);
    // console.log('verify', new Date(verify.exp * 1000));

    if (new Date() > new Date(verify.exp * 1000)) {
      throw new CustomError('Token Expired', 401);
    }

    res.locals.authdata = { _id: verify._id, username: verify.username };
    next();
    return;
  }
);
export const verifyUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { _id, username } = res.locals.authdata;
    // console.log('jjjj', _id, username);

    const db = await mongodb();
    const userCheck = await db
      ?.collection('Register')
      .findOne(
        { _id: new ObjectId(_id), username },
        { projection: { _id: 1 } }
      );
    // console.log('usercheck', userCheck);

    if (!userCheck) {
      res.status(401).send({ status: 401, message: 'User not found' });
      return;
    }

    next();
    return;
  }
);

export const validator =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    console.log('validator', res.locals.reqdata);
    try {
      const value = await schema.validateAsync(res.locals.reqdata);

      // console.log('value', value);
    } catch (error: any) {
      console.log('errorqqq', error.message);
      res.status(400).send({ status: 400, message: error.message });
      return;
    }

    next();
    return;
  };
