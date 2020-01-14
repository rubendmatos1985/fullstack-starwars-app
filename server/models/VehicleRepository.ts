import { VehicleContext } from "../DB/VehicleContext"

export default (() => {
  const { Get, Remove, Add, Update, Create, RemoveThis }   = VehicleContext
  return {
    getById       : Get('id'),
    getAll        : Get(),
    getByName     : Get('name'),
    RemoveFilms   : Remove('films'),
    RemovePilots  : Remove('pilots'),
    AddFilms      : Add('films'),
    AddPilots     : Add('pilots'),
    Update,
    Create,
    RemoveThis
  }
})()