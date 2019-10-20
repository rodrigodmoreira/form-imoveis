const controllers = require('./controllers')

module.exports = app => {
  app.get('/addresses', controllers.listAdresses)
}