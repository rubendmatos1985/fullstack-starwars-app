import uuid from 'uuid/v1';
import { v1String } from 'uuid/interfaces';
const formatData:any = (arrData:any, fields:any = []) =>
  arrData.map((obj:any) =>
    Object.keys(obj)
      .filter(k => fields.indexOf(k) > -1)
      .reduce((acc, curr) => ({ id: uuid(), ...acc, [curr]: obj[curr] }), {})
  )
export default formatData
