require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const displayRoutes = require('express-routemap'); 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`I'm listening on port ${port}`)
  displayRoutes(app);
})

