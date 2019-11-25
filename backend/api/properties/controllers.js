const { Property, PropertyExtras, Address, PropertyType, Transaction } = require('database')
const { isNil } = require('utils')

module.exports = {
  showProperty: async (req, res) => {
    const property = await Property.findOne(req.params.id)
    if (isNil(property)) {
      res.send(null)
      return
    }

    await internals.setRelations(property)

    res.send(property)
  },

  listProperties: async (req, res) => {
    const list = await Property.findAll()

    for (const property of list) {
      await internals.setRelations(property)
    }

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

const internals = {
  setRelations: async (property) => {
    const type = await PropertyType.findOne(property.type_id)
    if (!isNil(type)) {
      delete property.type_id
      property.type = type
    }

    const propertyExtras = await PropertyExtras.findByProperty(property.id)
    if (!isNil(propertyExtras)) {
      delete propertyExtras.property_id
      property.property_extras = propertyExtras
    }

    const address = await Address.findOneWithDistricts(property.addresses_id)
    if (!isNil(address)) {
      delete property.addresses_id
      property.address = address
    }
  }
}
