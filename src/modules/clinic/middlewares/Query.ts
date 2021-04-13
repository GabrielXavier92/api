import { AuthenticatedMiddleware } from '../../auth/utils';
import { AuthorizatedClinicMiddleware } from './utils';

const QueryMiddleware = {
  Query: {
    clinic: [AuthenticatedMiddleware, AuthorizatedClinicMiddleware(['ADMIN', 'USER'])],
    clinics: [AuthenticatedMiddleware, AuthorizatedClinicMiddleware(['ADMIN', 'USER'])],
  },
};

export default QueryMiddleware;
