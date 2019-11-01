const controllers = require('./controllers')

module.exports = app => {
  app.get('/addresses', controllers.listAddresses)
  app.post('/addresses/districts', controllers.createAddressDistrict)
}
