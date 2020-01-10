import { VehicleContext } from "../DB/VehicleContext"

export default (() => {
  const { Get }   = VehicleContext
  return {
    getById       : Get('id'),
    getAll        : Get(),
    getByName     : Get('name')
  }
})()