import express from 'express';

const router = express.Router();

import ListRouter from './list/router';
import ViewRouter from './view/router';

router.get('/list', ListRouter);
router.get('/view', ViewRouter);

export default router;
