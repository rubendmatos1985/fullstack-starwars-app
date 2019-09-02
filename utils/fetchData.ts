require('es6-promise').polyfill()
const fetch = require('isomorphic-fetch')


function getDataFromApi(url:string):Promise<any>{
 return fetch(url)
    .then((data:any) => data.json())
    .catch((e:any) => ({ error: e }))
}
export default getDataFromApi;
