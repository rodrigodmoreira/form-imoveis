require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

require('./database')
require('./api')(app)

app.listen(process.env.PORT, () => {
  console.log(`back-imoveis running on port ${process.env.PORT}`)
})
