// AUTH_TEST: đặt khi cần thử nhanh — `401` (chưa đăng nhập), `403` (không phải admin), bỏ trống = bình thường
const authTest = process.env.AUTH_TEST;

const authMiddleware = {
    authenticate: (req, res, next) => {
        const isAuthenticated = authTest !== '401';
        if (isAuthenticated) {
            next();
        } else {
            res.status(401).send('Unauthorized');
        }
    },
    authorizationAdmin: (req, res, next) => {
        const isAdmin = authTest === '403' ? false : true;
        if (isAdmin) {
            next();
        } else {
            res.status(403).send('Forbidden');
        }
    }
}

export default authMiddleware;