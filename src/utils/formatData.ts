import uuid from 'uuid/v1';
const formatData:any = (arrData:any, fields:any = []) =>
  arrData.map((obj:any) =>
    Object.keys(obj)
      .filter(k => fields.indexOf(k) > -1)
      .reduce((acc, curr) => ({ id: uuid(), ...acc, [curr]: obj[curr] }), {})
  )
export default formatData
