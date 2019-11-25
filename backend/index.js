require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

require('./database')
require('./api')(app)

app.listen(process.env.PORT || 3676, () => {
  console.log(`back-imoveis running on port ${process.env.PORT}`)
})
