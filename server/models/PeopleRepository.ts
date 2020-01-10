import { PeopleContext } from "../DB/PeopleContext";

export default (function() {
  const { Get }   = PeopleContext;

  return {
    GetByName     : Get("name"),
    GetById       : Get("id"),
    GetAll        : Get()
  };
})();
