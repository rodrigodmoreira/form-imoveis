const { Address, AddressDistrict, Transaction } = require('database')
const { isNil } = require('utils')

module.exports = {
  showAddress: async (req, res) => {
    const address = await Address.findByPk(req.params.id)
    res.send(address)
  },

  listAddresses: async (req, res) => {
    const addressList = await Address.findAllWithDistricts()
    res.send(addressList)
  },

  createAddress: async (req, res) => {
    try {
      const districtName = req.body.district
      const address = req.body
      delete address.district_name

      let result = {}
      if (!isNil(districtName)) {
        await Transaction(async client => {
          result.district = await AddressDistrict.create({ name: districtName })

          address.district_id = result.district.id
          result.address = await Address.create(address)
        })
      } else {
        result = await Address.create(address)
      }

      res.send(result)
    } catch (error) {
      console.error(error)
      res.status(400).send({ message: 'Could not create' })
    }
  },

  showDistrict: async (req, res) => {
    const district = await AddressDistrict.findByPk(req.params.id)
    res.send(district)
  },

  listDistricts: async (req, res) => {
    const districtList = await AddressDistrict.findAll()
    res.send(districtList)
  },

  createDistrict: async (req, res) => {
    try {
      const district = await AddressDistrict.create(req.body)
      res.send(district)
    } catch (error) {
      console.error(error)
      res.status(400).send({ message: 'Could not create' })
    }
  }
}
