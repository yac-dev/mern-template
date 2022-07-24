import express from 'express';
const router = express.Router();
import { getUser } from '../controllers/users';

router.route('/:id').get(getUser);
// router.route('/:id')

export default router;
