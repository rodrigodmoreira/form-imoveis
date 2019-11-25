const generic = require('../generic')

const PropertyType = pool => {
  const columns = [
    'id', 'name'
  ]
  const model = generic('property_types', columns, pool)

  return model
}

module.exports = PropertyType
