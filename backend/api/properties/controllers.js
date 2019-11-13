const { Property, PropertyExtras, Transaction } = require('database')
const { isNil } = require('utils')

module.exports = {
  showProperty: async (req, res) => {
    const property = await Property.findByPk(req.params.id)
    if (isNil(property)) {
      res.send(null)
      return
    }

    const propertyExtras = await PropertyExtras.findByProperty(property.id)
    if (!isNil(propertyExtras)) delete propertyExtras.property_id

    property.property_extras = propertyExtras

    res.send(property)
  },

  listProperties: async (req, res) => {
    const list = await Property.findAllComplete()
    res.send(list)
  },

  createProperty: async (req, res) => {
    try {
      const property = req.body.property
      const propertyExtras = req.body.property_extras

      let result = {}
      if (!isNil(propertyExtras)) {
        await Transaction(async client => {
          result.property = await Property.create(property)

          propertyExtras.property_id = result.property.id
          result.property_extras = await PropertyExtras.create(propertyExtras)
        })
      } else {
        result = await Property.create(property)
      }

      res.send(result)
    } catch (error) {
      console.error(error)
      res.status(400).send({ message: 'Could not create' })
    }
  },

  updateProperty: async (req, res) => {
    try {
      const property = await Property.update(req.params.id, req.body)
      res.send(property)
    } catch (error) {
      console.error(error)
      res.status(400).send({ message: 'Could not update' })
    }
  },

  deleteProperty: async (req, res) => {
    try {
      const property = await Property.delete(req.params.id)
      res.send(property)
    } catch (error) {
      console.error(error)
      res.status(400).send({ message: 'Could not delete' })
    }
  }
}
