import uuid from 'uuid/v1';
async function mapData<A,B>  (from: () => Promise<A[]>, fields: string[]):Promise<B[]>{
 const data:A[] =  await from();
  return data.map((obj: any) =>
      Object.keys(obj)
        .filter((k) => fields.indexOf(k) > -1)
        .reduce((acc, curr) => ({ id: uuid(), ...acc, [curr]: obj[curr] }), {}),
    ) as B[]
}
export default mapData;
