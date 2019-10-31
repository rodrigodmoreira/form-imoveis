const { isNil, objToArr } = require('utils')

module.exports = (tableName, columns, pool) => ({
  tableName: tableName,
  tableColumns: columns,

  create: (attrs) => {
    attrs = internals.extractAllowedColumns(attrs, columns)

    const query = `
      INSERT INTO ${tableName} (${internals.columnsToString(attrs)})
      VALUES (${internals.getWildcards(attrs)})
      RETURNING *
    `

    return pool.query(query, objToArr(attrs)).then(({ rows }) => rows[0] || null)
  },

  findByPk: (id) => pool.query(`SELECT * FROM ${tableName} WHERE id = $2::integer`, [id]).then(({ rows }) => rows[0] || null),
  findAll: () => pool.query(`SELECT * FROM ${tableName}`).then(({ rows }) => rows)
})

const internals = {
  extractAllowedColumns: (attrs, columns) => {
    const allowedAttrs = {}
    columns.forEach(col => {
      if (!isNil(attrs[col])) allowedAttrs[col] = attrs[col]
    })
    return allowedAttrs
  },

  columnsToString: (attrs) => {
    let list = ''
    const keys = Object.keys(attrs)
    keys.forEach((col, index) => {
      if (col === 'id') return
      list = `${list}${col}${index === keys.length - 1 ? '' : ', '}`
    })
    return list
  },

  getWildcards: (attrs) => {
    let list = ''
    const keys = Object.keys(attrs)
    keys.forEach((col, index) => {
      if (col === 'id') return
      list = `${list}$${index + 1}${index === keys.length - 1 ? '' : ', '}`
    })
    return list
  }
}
