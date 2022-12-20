const express = require('express');
const router = express.Router();

const envelopeController = require('../controllers/envelopeController');

// * get all the envelopes
router.get('/', envelopeController.getEnvelopes);

// * get a specific envelope using the id parameter
router.get('/:id', envelopeController.getEnvelopesWithId);

module.exports = router;