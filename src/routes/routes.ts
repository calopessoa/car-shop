import express = require('express');
import carController from '../integrations';

const router = express.Router();

router
  .post('/', (req, res) => carController.create(req, res))
  .get('/', (req, res) => carController.read(req, res))
  .get('/:id', (req, res) => carController.readOne(req, res));

export default router;