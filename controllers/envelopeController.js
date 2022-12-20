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
      res.status(404).send({
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

exports.getEnvelopesWithName = async (req, res) => {
  try {
    // ! make sure that the params that is being used is specified in the req call, forgot it and spent way too long thinking something else was wrong
    const envelopeName = req.params.name;

    // get the db info and use the db function to filter the db for what is being looked for
    const envelopes = await envelopesDB.envelopes;
    const envelope = envelopesDB.findByName(envelopes, envelopeName);

    // if the envelope doesn't exist send a not found error
    if (!envelope) {
      res.status(404).send({
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