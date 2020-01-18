import { ISpecieEntity } from '../../../server/models/Specie';
import { CommonPostRequestsTests } from '../../../spec/commons/post_queries';

CommonPostRequestsTests.Update<ISpecieEntity>('specie', 'species');
