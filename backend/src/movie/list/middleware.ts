import { NextFunction, Request, Response } from 'express';
import { catchAsync } from '../../common/errorhandler';
import { data } from '../data/data';

export const getMovieList = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({
      status: 200,
      data,
    });
  }
);
