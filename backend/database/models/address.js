const generic = require('../generic')

const Address = pool => {
  const columns = ['id', 'district_id', 'number', 'street']
  const model = generic('addresses', columns, pool)

  model.findAllWithDistricts = () => pool.query(`
    SELECT a.id, a.street, a.number, d.name district
      FROM addresses a
        INNER JOIN address_districts d ON a.district_id = d.id;
  `)

  return model
}

module.exports = Address
