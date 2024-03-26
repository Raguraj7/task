import express from 'express';
import { getReqData, reqMethodValidate } from '../../common/middleware';
import { register } from './middleware';

const router = express.Router();

router.use(reqMethodValidate, getReqData, register);

export default router;
