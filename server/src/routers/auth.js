import express from 'express';
const router = express.Router();
import { signup, login, loadMe } from '../controllers/auth';
import { authorization } from '../middlewares/authorization';

router.post('/signup', signup);
router.post('/login', login);
router.get('/loadMe', authorization, loadMe);

export default router;
