import { AuthenticatedMiddleware } from '../../auth/utils';
import { AuthorizatedMiddleware } from './utils';

const MutationMiddleware = {
  Mutation: {
    updateClinic: [AuthenticatedMiddleware, AuthorizatedMiddleware(['ADMIN'])],
    deleteClinic: [AuthenticatedMiddleware, AuthorizatedMiddleware(['ADMIN'])],
  },
};

export default MutationMiddleware;
