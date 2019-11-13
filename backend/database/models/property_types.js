const generic = require('../generic')

const Property = pool => {
  const columns = [
    'id', 'type'
  ]
  const model = generic('property_types', columns, pool)

  return model
}

module.exports = Property
