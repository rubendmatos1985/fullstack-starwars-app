require('es6-promise').polyfill()
const fetch = require('isomorphic-fetch')

const getDataFromApi = (url:any) =>
  fetch(url)
    .then((data:any) => data.json())
    .catch((e:any) => ({ error: e }))

export default getDataFromApi;
