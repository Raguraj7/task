import { NextFunction, Request, Response } from 'express';

const ErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('Middleware Error Hadnling', err);
  const errStatus = err.status || 500;
  const errMsg = err.message || 'Something went wrong';
  res.status(errStatus).json({
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === 'development' ? err.stack : {},
  });
};

export default ErrorHandler;

export const catchAsync = (fn: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

export class CustomError extends Error {
  public message: string;
  public status: undefined | number;

  constructor(errormessage: string, status?: number) {
    super();
    this.message = errormessage;
    this.status = status ? status : undefined;
  }
}
