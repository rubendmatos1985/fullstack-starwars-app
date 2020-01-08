
import { SpecieContext } from "../DB/SpecieContext";

export default (() => {
  const { get } = SpecieContext;
  return {
    getById: get('id'),
    getAll: get()
  }
})()