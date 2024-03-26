import express from 'express';
import { getReqData, reqMethodValidate } from '../../common/middleware';
import { signin } from './middleware';

const router = express.Router();

router.use(reqMethodValidate, getReqData, signin);

export default router;
