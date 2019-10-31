const generic = require('../generic')

const AddressDistrict = pool => {
  const columns = ['id', 'name']
  const model = generic('address_districts', columns, pool)

  return model
}

module.exports = AddressDistrict
