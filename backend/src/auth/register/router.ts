import express from 'express';
import {
  getReqData,
  reqMethodValidate,
  validator,
} from '../../common/middleware';
import { register } from './middleware';
import { registerSchema } from './validator';

const router = express.Router();

router.use(reqMethodValidate, getReqData, validator(registerSchema), register);

export default router;
