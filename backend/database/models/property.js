const generic = require('../generic')
const { cleanNils } = require('../../utils')

const Property = pool => {
  const columns = [
    'id', 'type_id', 'addresses_id', 'qt_rooms',
    'qt_suites', 'qt_lvrooms', 'qt_vacancies', 'area',
    'builtin_cabinet', 'description', 'rent'
  ]
  const model = generic('properties', columns, pool)

  model.findAllComplete = () => pool.query(`
    SELECT p.id, t.type, p.addresses_id, p.qt_rooms,
      p.qt_suites, p.qt_lvrooms, p.qt_vacancies, p.area,
      p.builtin_cabinet, p.description, p.rent,
      e.qt_dnrooms, e.floor, e.condo_value, e.lobby_24h
    FROM properties p
      INNER JOIN property_types t ON p.type_id = t.id
      LEFT JOIN property_extras e ON p.id = e.property_id
  `).then(({ rows }) => rows.map(item => cleanNils(item)))

  return model
}

module.exports = Property
