import express = require('express');
import carController from '../integrations';

const router = express.Router();

router.post('/', (req, res) => carController.create(req, res));

export default router;