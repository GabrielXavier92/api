import { AuthenticatedMiddleware } from '../../auth/utils';
import { AuthorizatedClinicMiddleware } from './utils';

const MutationMiddleware = {
  Mutation: {
    updateClinic: [AuthenticatedMiddleware, AuthorizatedClinicMiddleware(['ADMIN'])],
    deleteClinic: [AuthenticatedMiddleware, AuthorizatedClinicMiddleware(['ADMIN'])],
  },
};

export default MutationMiddleware;
