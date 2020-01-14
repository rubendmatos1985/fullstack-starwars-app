import { StarshipContext } from '../DB/StarshipContext';
import { IDBResponse } from '../DB';
import { IStarshipViewModel } from './ViewModels/StarshipViewModel';

type Getter = (id: string) => Promise<IDBResponse<IStarshipViewModel[]>>;
type GetterWithNoArgs = () => Promise<IDBResponse<IStarshipViewModel[]>>;
type Adder = (ids: string[]) => Promise<IDBResponse<IStarshipViewModel[]>>;
type Remover = (ids: string[]) => Promise<IDBResponse<string>>;

export default (() => {
  const { Get, Add, Remove, Update, Create, RemoveThis } = StarshipContext;
  return {
    getById         : Get('id') as Getter,
    getAll          : Get() as GetterWithNoArgs,
    getByName       : Get('name') as Getter,
    AddPilots       : Add('pilots') as Adder,
    AddFilms        : Add('films') as Adder,
    RemovePilots    : Remove('pilots') as Remover,
    RemoveFilms     : Remove('films') as Remover,
    Update,
    Create,
    RemoveThis
  };
})();
