import { NextFunction, Request, Response } from 'express';
import mongodb from '../../mongodb';
import { catchAsync } from '../../common/errorhandler';
import { jwtGenerateToken } from '../../common/jwtFns';

export const signin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = res.locals.reqdata;
    console.log({ username, password });

    if (!username || !password) {
      res.status(400).send({ status: 400, message: 'Please give all values.' });
      return;
    }

    const db = await mongodb();
    const getUser = await db?.collection('Register').findOne(
      {
        username,
        password,
      },
      { projection: { _id: 1, username: 1 } }
    );
    console.log('getuser', getUser);

    if (!getUser) {
      res.status(400).send({ status: 400, message: 'User not found.' });
      return;
    }

    const token = jwtGenerateToken(getUser);

    res.status(201).send({
      status: 201,
      data: token,
    });
  }
);
