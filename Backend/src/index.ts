import express from 'express';
import cors from 'cors';
import router from './routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/surveys', router);

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001');
});
