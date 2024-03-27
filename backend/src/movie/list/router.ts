import express from 'express';
import {
  getReqData,
  reqMethodValidate,
  verifyToken,
  verifyUser,
} from '../../common/middleware';
import { getMovieList } from './middleware';

const router = express.Router();

router.use(
  reqMethodValidate,
  getReqData,
  verifyToken,
  verifyUser,
  getMovieList
);

export default router;
