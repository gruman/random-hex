
const express = require('express');


const router = express.Router();

const publicController = require('../controllers/public')

router.get('/', publicController.getHex);

module.exports = router;
