const envelopesDB = require('../db');


//  TODO: add some response codes for letting user know what is going on

// * function to get all the envelopes in the db
//  ! this would work for a real db call to catch any errors i believe
exports.getEnvelopes = async (req, res) => {
  try {
    const envelopes = await envelopesDB.envelopes
    res.send(envelopes);
  } catch (err) {
    res.status(400).send(err);
  }
}

// * function to get a specific envelope
exports.getEnvelopesWithId = async (req, res) => {
  try {
    // ! make sure that the params that is being used is specified in the req call, forgot it and spent way too long thinking something else was wrong
    const envelopeId = req.params.id;

    // get the db info and use the db function to filter the db for what is being looked for
    const envelopes = await envelopesDB.envelopes;
    const envelope = envelopesDB.findById(envelopes, envelopeId);

    // if the envelope doesn't exist send a not found error
    if (!envelope) {
      // ! need to have a return otherwise the server kicks out a ERR_HTTP_HEADERS_SENT error because the header of the call is being changed after is was already set
      return res.status(404).send({
        message: `Envelope not found.`
      })
    }

    // send the envelope
    res.status(200).send(envelope);

  } catch (err) {
    // send a something went wrong error
    //  ? should this be a different error code
    res.status(500).send(err);
  }
}

//  * function to get the envelope by the name
exports.getEnvelopesWithName = async (req, res) => {
  try {
    // ! make sure that the params that is being used is specified in the req call, forgot it and spent way too long thinking something else was wrong
    const envelopeName = req.params.name;

    // get the db info and use the db function to filter the db for what is being looked for
    const envelopes = await envelopesDB.envelopes;
    const envelope = envelopesDB.findByName(envelopes, envelopeName);

    // if the envelope doesn't exist send a not found error
    if (!envelope) {
      return res.status(404).send({
        message: `Envelope not found.`
      })
    }

    // send the envelope
    res.status(200).send(envelope);

  } catch (err) {
    // send a something went wrong error
    //  ? should this be a different error code
    res.status(500).send(err);
  }
}

// * add a new envelope
exports.addEnvelope = async (req, res) => {
  try {
    const { title, budget, saved } = req.body;

    const envelopes = await envelopesDB.envelopes;
    // get a created id from the db
    const newId = envelopesDB.newId(envelopes);

    // pass all the new info
    const newEnvelope = {
      id: newId,
      name: title,
      // changes these to numbers from the strings that are passed
      budget: parseInt(budget),
      amountSaved: parseInt(saved),
    }

    envelopes.push(newEnvelope);
    res.status(201).send(envelopes);
  } catch (err) {
    res.status(500).send(err)
  }
}

// * update the envelope with the id
exports.updateEnvelopeWithId = async (req, res) => {
  try {
    const envelopeId = req.params.id;
    // ! the name of the parsed info needs to be what is passed in the req it seems. when trying it with dif variable names I kept getting undefined passed info
    const { title, budget, saved } = req.body;
    const envelopes = await envelopesDB.envelopes;
    const envelope = envelopesDB.findById(envelopes, envelopeId);

    if (!envelope) {
      return res.status(404).send({
        message: `Envelope not found.`
      })
    }

    const budgetNumber = parseInt(budget);
    const savedNumber = parseInt(saved);

    //  check if the values passed for the numbers are successfully changed to int to go into the db
    if (typeof savedNumber !== 'number' || typeof budgetNumber !== 'number') {
      return res.status(400).send({
        message: `You didn't enter numbers for either budget or amount saved. Please try again.`
      })
    }

    envelope.name = title;
    envelope.budget = budgetNumber;
    envelope.amountSaved = savedNumber;

    res.status(202).send(envelopes);
  } catch (err) {
    res.status(404).send(err)
  }
}

// * update the envelope with the name
exports.updateEnvelopeWithName = async (req, res) => {
  try {
    const envelopeName = req.params.name;
    // ! the name of the parsed info needs to be what is passed in the req it seems. when trying it with dif variable names I kept getting undefined passed info
    const { title, budget, saved } = req.body;
    const envelopes = await envelopesDB.envelopes;
    const envelope = envelopesDB.findByName(envelopes, envelopeName);

    if (!envelope) {
      return res.status(404).send({
        message: `Envelope not found.`
      })
    }

    const budgetNumber = parseInt(budget);
    const savedNumber = parseInt(saved);

    //  check if the values passed for the numbers are successfully changed to int to go into the db
    if (typeof savedNumber !== 'number' || typeof budgetNumber !== 'number') {
      return res.status(400).send({
        message: `You didn't enter numbers for either budget or amount saved. Please try again.`
      })
    }

    envelope.name = title;
    envelope.budget = budgetNumber;
    envelope.amountSaved = savedNumber;

    res.status(202).send(envelopes);
  } catch (err) {
    res.status(404).send(err)
  }
}