require('es6-promise').polyfill()
const fetch = require('isomorphic-fetch')

const getDataFromApi = (url) =>
  fetch(url)
    .then(data => data.json())
    .catch(e => ({ error: e }))

module.exports = getDataFromApi
