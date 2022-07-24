import express from 'express';
import cors from 'cors';
import './databases/mongoose';

// routers
import authRouter from './routers/auth';
import usersRouter from './routers/users';
import pollsRouter from './routers/polls';
import votesRouter from './routers/votes';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  response.send('Hello guest');
});

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/polls', pollsRouter);
app.use('/api/votes', votesRouter);

export default app;
