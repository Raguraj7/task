import express from 'express';
import {
  getReqData,
  reqMethodValidate,
  verifyToken,
  verifyUser,
} from '../../common/middleware';
import { viewMovie } from './middleware';

const router = express.Router();

router.use(reqMethodValidate, getReqData, verifyToken, verifyUser, viewMovie);

export default router;
