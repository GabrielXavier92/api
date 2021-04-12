import { AuthenticatedMiddleware } from '../../auth/utils';
import { AuthorizatedMiddleware } from './utils';

const QueryMiddleware = {
  Query: {
    clinic: [AuthenticatedMiddleware, AuthorizatedMiddleware(['ADMIN', 'USER'])],
    clinics: [AuthenticatedMiddleware, AuthorizatedMiddleware(['ADMIN', 'USER'])],
  },
};

export default QueryMiddleware;
