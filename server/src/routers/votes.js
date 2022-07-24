import express from 'express';
const router = express.Router();
import { createVote } from '../controllers/votes';

router.post('/', createVote);

export default router;
