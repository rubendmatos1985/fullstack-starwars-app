import { IPeople } from '../../../server/models/People';
import { CommonPostRequestsTests } from '../../../spec/commons/post_queries';

CommonPostRequestsTests.Update<IPeople>('people', 'people');
