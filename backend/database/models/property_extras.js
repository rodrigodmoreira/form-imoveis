const generic = require('../generic')

const PropertyExtras = pool => {
  const columns = ['id', 'property_id', 'qt_dnrooms', 'floor', 'condo_value', 'lobby_24h']
  const model = generic('property_extras', columns, pool)

  model.findByProperty = (id) => pool.query('SELECT * FROM property_extras WHERE property_id = $1::integer', [id]).then(({ rows }) => rows[0])

  return model
}

module.exports = PropertyExtras
