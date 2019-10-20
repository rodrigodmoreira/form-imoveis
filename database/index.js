const Sequelize = require('sequelize');

const sequelize = process.env.NODE_ENV === 'production'
  ? new Sequelize('imoveis-back', 'postgres', 'postgres', {
      host: 'localhost',
      dialect: 'postgres'
    })
  : new Sequelize(process.env.DATABASE_URI)

module.exports = sequelize
