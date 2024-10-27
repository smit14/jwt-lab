const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(cors());

const verifyJwt = (jwt) => {
  // TODO: Implement
  return ""
}

const decodeUser = (jwt) => {
  // TODO: Implement
  return ""
}

// profile endpoint
app.get('/profile', (req, res) => {
  const { jwt } = req.body;

  if (!verifyJwt(jwt)) {
    res.status(401).json({ message: 'Unauthenticated'})
  }
  const username = decodeUser(jwt)
  res.status(200).json({ message: `Welcome ${username}` });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
