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

app.use((
    req,
    res,
    next
) => {
    console.log('Время ', Date.now());
    next();
});

const cb = (req, res, next) => {
    console.log('CB');
    next();
}
app.get('/hello', cb, (req, res) => {
    throw new Error('Error!!!');
});

app.post('/hello', cb, (req, res) => {
    res.send('Привет! POST');
});

app.use('/users', userRouter);
app.use((
    err,
    req,
    res,
    next
) => {
    console.log(err.message);
    res.status(401).send(err.message);
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});