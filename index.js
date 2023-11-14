import express from 'express';
import { userRouter } from './users/users.js'

const port = '8000';
const app = express();

app.all('/hello', (
    req,
    res,
    next
) => {
    console.log('All');
    next();
});

const cb = (req, res, next) => {
    console.log('CB');
    next();
}
app.get('/hello', cb, (req, res) => {
    res.status(201).send({ success: true});
});

app.post('/hello', cb, (req, res) => {
    res.send('Привет! POST');
});

app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});