import { AuthenticatedMiddleware } from '../../auth/utils';
import { AuthorizatedSpecialtyMiddleware } from './utils';

const QueryMiddleware = {
  Query: {
    specialty: [AuthenticatedMiddleware, AuthorizatedSpecialtyMiddleware(['ADMIN'])],
    specialties: [AuthenticatedMiddleware, AuthorizatedSpecialtyMiddleware(['ADMIN'])],
  },
};

export default QueryMiddleware;
