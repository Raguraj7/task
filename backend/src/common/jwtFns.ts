import jwt from 'jsonwebtoken';

const secretkey = process.env.JWT_SECRET_KEY as string;
console.log('SECRET', secretkey);

export const generateToken = (data: any) => {
  return jwt.sign(data, secretkey, {
    expiresIn: '5h',
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, secretkey);
};
