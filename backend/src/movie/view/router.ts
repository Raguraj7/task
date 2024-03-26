import express from 'express';
import { getReqData, reqMethodValidate } from '../../common/middleware';
import { viewMovie } from './middleware';

const router = express.Router();

router.use(reqMethodValidate, getReqData, viewMovie);

export default router;
