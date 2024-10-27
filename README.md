# JWT-lab

Link to article
https://medium.com/@thakkarsmit/how-jwt-enables-password-less-authentication-870ada4f1e45

# Architecture
![](assets/architecture.png)

# Setup
Install **Node.js**

# Steps
Write a function that encodes string to base64, write fun that decodes it.

Write a function that applies RSA to content.

Create private and public keys. Store it in `keys` folder.

Write a function that creates a digital signature of a string.

Write a function that verifies signature.

Write a function that creates a JWT

Write a function that verifies a JWT

# How to run

```
cd client
npm start
```
This will run client on port XXXX

```
cd auth-server
node app.js
```
This will run an auth server on port 3001

```
cd application-server
node app.js
```
This will run an application server on port 3002
