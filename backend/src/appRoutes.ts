import express from 'express';
const router = express.Router();

import AuthRoutes from './auth/authRoutes';
import movieRoutes from './movie/movieRoutes';

router.use('/auth', AuthRoutes);
router.use('/movie', movieRoutes);

export default router;
