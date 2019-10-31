const { Address, AddressDistrict } = require('database')

module.exports = {
  listAdresses: async (req, res) => {
    const list = await Address.findAllWithDistricts()
    res.send(list)
  },

  createAddressDistrict: async (req, res) => {
    try {
      const district = await AddressDistrict.create(req.body)
      res.send(district)
    } catch (error) {
      console.log(error)
      res.status(400).send({ message: 'Could not create' })
    }
  }
}
