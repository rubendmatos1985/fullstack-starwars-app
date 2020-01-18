import { IVehicleEntity } from '../../../server/models/Vehicle';
import { CommonPostRequestsTests } from '../../../spec/commons/post_queries';

CommonPostRequestsTests.Update<IVehicleEntity>('vehicle', 'vehicles');
