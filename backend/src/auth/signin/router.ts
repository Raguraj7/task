import express from 'express';
import {
  getReqData,
  reqMethodValidate,
  validator,
} from '../../common/middleware';
import { signin } from './middleware';
import { signinSchema } from './validator';

const router = express.Router();

router.use(reqMethodValidate, getReqData, validator(signinSchema), signin);

export default router;
