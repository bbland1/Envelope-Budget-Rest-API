const express = require('express');
const router = express.Router();

const envelopeController = require('../controllers/envelopeController');
router.use(express.json());

// !make sure to have this for parsing req.body it just is undefined without it
router.use(express.urlencoded({ extended: false }));

// * get all the envelopes
router.get('/', envelopeController.getEnvelopes);

// * get a specific envelope using the id parameter
router.get('/:id', envelopeController.getEnvelopesWithId);

// * to search for an envelope by name
router.get('/envelope/:name', envelopeController.getEnvelopesWithName);

// * add an envelope to the db
router.post('/', envelopeController.addEnvelope);

module.exports = router;