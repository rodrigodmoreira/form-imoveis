const { Pool } = require('pg')
const { readdirSync } = require('fs')

const pool = new Pool()

const db = {}
const files = readdirSync('database/models')

files.forEach(fileName => {
  fileName = fileName.replace(/\.js/g, '')

  let formattedName = ''
  fileName.split('_').forEach(word => {
    formattedName = `${formattedName}${word[0].toUpperCase()}${word.slice(1)}`
  })

  db[formattedName] = require(`./models/${fileName}`)(pool)
})

module.exports = db
