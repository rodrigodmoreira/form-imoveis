const { Property } = require('database')

module.exports = {
  listProperties: async (req, res) => {
    const list = await Property.findAllComplete()
    res.send(list)
  },

  createProperty: async (req, res) => {
    try {
      const property = await Property.create(req.body)
      res.send(property)
    } catch (error) {
      console.log(error)
      res.status(400).send({ message: 'Could not create' })
    }
  },

  updateProperty: async (req, res) => {
    try {
      const property = await Property.update(req.params.id, req.body)
      res.send(property)
    } catch (error) {
      console.log(error)
      res.status(400).send({ message: 'Could not update' })
    }
  },

  deleteProperty: async (req, res) => {
    try {
      const property = await Property.delete(req.params.id)
      res.send(property)
    } catch (error) {
      console.log(error)
      res.status(400).send({ message: 'Could not delete' })
    }
  }
}
