const express = require('express');
const envelopesRouter = require('./routes/envelopes');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/v1/envelopes', envelopesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`)
})