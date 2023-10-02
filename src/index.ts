import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 5002;
app.get('/', (request, response) => {
  response.send('Hello world!');
});
app.listen(port, () => console.log(`Running on port ${port}`));
