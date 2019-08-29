require('es6-promise').polyfill()
const fetch = require('isomorphic-fetch')
import {asyncMemoize} from './memoize';

function getDataFromApi(url:string){
 return fetch(url)
    .then((data:any) => data.json())
    .catch((e:any) => ({ error: e }))
}
export default asyncMemoize(getDataFromApi);
