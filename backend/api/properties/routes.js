const controllers = require('./controllers')

module.exports = app => {
  app.get('/properties/:id', controllers.showProperty)
  app.get('/properties', controllers.listProperties)
  app.post('/properties', controllers.createProperty)
  app.put('/properties/:id', controllers.updateProperty)
  app.delete('/properties/:id', controllers.deleteProperty)
}
