import express from 'express';
import authMiddleware from './middlewares/auth.js';
const app = express();

app.use(authMiddleware.authenticate); // Middleware để xác thực người dùng
app.use(authMiddleware.authorizationAdmin); // Middleware để xác thực quyền admin

app.get('/', (req, res) => {
    res.json({ ok: true, message: 'Đã qua authenticate + authorizationAdmin' });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});