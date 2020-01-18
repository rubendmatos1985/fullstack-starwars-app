import { ISpecieEntity } from '../../../server/models/Specie';
import { CommonPostRequestsTests } from '../../commons/post_queries';

CommonPostRequestsTests.Update<ISpecieEntity>('starship', 'starships');
