import express from 'express';
import { rateLimit } from 'express-rate-limit';
import cors from 'cors';
import 'dotenv/config';

const PORT = process.env.PORT || 8080;

const app = express();
app.use(
  cors({
    allowedHeaders: '*',
  })
);
app.use(rateLimit());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hi From Express + Typescript' });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
