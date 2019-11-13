const controllers = require('./controllers')

module.exports = app => {
  app.get('/addresses/:id', controllers.showAddress)
  app.get('/addresses', controllers.listAddresses)
  app.post('/addresses', controllers.createAddress)

  app.get('/addresses/districts/:id', controllers.showDistrict)
  app.get('/addresses/districts', controllers.listDistricts)
  app.post('/addresses/districts', controllers.createDistrict)
}
