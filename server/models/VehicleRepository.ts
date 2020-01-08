import { VehicleContext } from "../DB/VehicleContext"

export default (() => {
  const { get }  = VehicleContext
  return {
    getById: get('id'),
    getAll: get(),
    getByName: get('name')
  }
})()