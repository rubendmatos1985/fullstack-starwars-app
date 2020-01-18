import { CommonPostRequestsTests } from '../../../spec/commons/post_queries';
import { Film } from '../../../server/models/Film';

CommonPostRequestsTests.Update<Film>('film', 'films');
