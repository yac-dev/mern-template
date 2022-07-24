import express from 'express';
const router = express.Router();
import { createPoll, getPolls, getRandomPoll } from '../controllers/polls';

router.route('/randomPoll').post(getRandomPoll);
// router.patch('/updateMyPassword', authController.updatePassword);
router.route('/').get(getPolls).post(createPoll);
// router.route('/:id')

export default router;
