const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

// In-memory data structure to store user data
const users = [];

const createJwt = (user) => {
  // TODO: Implement
  return ""
}

// Sign-up endpoint
app.post('/sign-up', (req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // Store the user data in memory
  users.push({ username, password });

  console.log('Current users:', users);

  res.status(200).json({ message: 'Sign-up successful' });
});

// Sign-in endpoint
app.post('/sign-in', (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password match
  const user = users.find(user => user.username === username && user.password === password);

  // create jwt
  const jwt = createJwt(user)

  if (user) {
    return res.status(200).json({ jwt: jwt });
  } else {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
