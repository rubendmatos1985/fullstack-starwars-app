const uuid = require('uuid/v1');
const formatData = (arrData, fields = []) =>
  arrData.map(obj =>
    Object.keys(obj)
      .filter(k => fields.indexOf(k) > -1)
      .reduce((acc, curr) => ({ id: uuid(), ...acc, [curr]: obj[curr] }), {})
  )
module.exports = formatData
