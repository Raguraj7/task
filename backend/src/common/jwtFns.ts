import jwt from 'jsonwebtoken';
import { CustomError } from './errorhandler';

const secretkey = process.env.JWT_SECRET_KEY as string;

export const jwtGenerateToken = (data: any) => {
  console.log('SECRET', secretkey);
  return jwt.sign(data, secretkey, {
    expiresIn: '24h',
  });
};

export const jwtVerifyToken = (token: string) => {
  try {
    const verify = jwt.verify(token, secretkey);
    return verify;
  } catch (error: any) {
    throw new CustomError(error.message, 401);
  }
};
