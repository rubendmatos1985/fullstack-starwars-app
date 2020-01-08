import { PeopleContext } from "../DB/PeopleContext"

export default (function () {
  const { get } = PeopleContext

  return {
    getByName: get('name'),
    getById: get('id'),
    getAll: get()
  }
})()