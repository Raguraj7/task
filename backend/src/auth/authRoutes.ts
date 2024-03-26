import express from 'express';

const router = express.Router();

import RegisterRouter from './register/router';
import SigninRouter from './signin/router';

router.post('/register', RegisterRouter);
router.post('/signin', SigninRouter);

export default router;
