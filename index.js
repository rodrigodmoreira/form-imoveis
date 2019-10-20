require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded())

require('./api')(app)

app.listen(3676, () => {
  console.log('back-imoveis running on port 3676')
})
