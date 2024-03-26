import { NextFunction, Request, Response } from 'express';
import { catchAsync } from '../../common/errorhandler';
import { data } from '../data/data';

export const viewMovie = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = res.locals.reqdata;
    if (!id) {
      res.status(400).send({ message: 'Id not found' });
      return;
    }
    const movieData = data.find((el) => el.id === id);

    res.status(200).send({ status: 200, data: { ...movieData } });
  }
);
