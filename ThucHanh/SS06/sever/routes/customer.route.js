const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/:id/api-key', authMiddleware, customerController.getAPIKey);

router.use(authMiddleware);

module.exports = router;