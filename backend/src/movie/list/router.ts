import express from 'express';
import { getReqData, reqMethodValidate } from '../../common/middleware';
import { getMovieList } from './middleware';

const router = express.Router();

router.use(reqMethodValidate, getReqData, getMovieList);

export default router;
