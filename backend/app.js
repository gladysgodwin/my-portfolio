const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());

app.get('/result', (req, res) => {
  res.json('Thank you for reaching out .....');
});

app.post('/submit-data', (req, res) => {
  const { name, email, message } = req.body;

  //connect to database here

  res.json('Thank you for reaching out, I will get back to you shortly');
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});