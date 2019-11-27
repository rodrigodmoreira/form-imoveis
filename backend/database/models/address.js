const generic = require('../generic')

const Address = pool => {
  const columns = ['id', 'district_id', 'number', 'street']
  const model = generic('addresses', columns, pool)

  model.findAllWithDistricts = () => pool.query(`
    SELECT a.id, a.street, a.number, d.name district
      FROM addresses a
        INNER JOIN address_districts d ON a.district_id = d.id
  `).then(({ rows }) => rows)

  model.findAllFromDistricts = (districts = []) => {
    let inQuery = []
    for (const dId of districts) {
      const value = Number.parseInt(dId)
      if (!Number.isInteger(value)) throw new Error('invalid_district_id')
      inQuery.push(value)
    }
    inQuery = JSON.stringify(inQuery)
    inQuery = inQuery.slice(1, inQuery.length - 1)

    return pool.query(`
      SELECT a.id, a.street, a.number, d.name district
        FROM addresses a
          INNER JOIN address_districts d ON a.district_id = d.id
        WHERE d.id IN (${inQuery}) 
    `).then(({ rows }) => rows)
  }

  model.findOneWithDistricts = (id) => pool.query(`
  SELECT a.id, a.street, a.number, d.name district
    FROM addresses a
      INNER JOIN address_districts d ON a.district_id = d.id
    WHERE a.id = $1::integer
  `, [id]).then(({ rows }) => rows[0] || null)

  return model
}

module.exports = Address
