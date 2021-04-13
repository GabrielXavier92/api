import { AuthenticatedMiddleware } from '../../auth/utils';
import { AuthorizatedSpecialtyMiddleware } from './utils';

const MutationMiddleware = {
  Mutation: {
    createSpecialty: [AuthenticatedMiddleware, AuthorizatedSpecialtyMiddleware(['ADMIN'])],
    updateSpecialty: [AuthenticatedMiddleware, AuthorizatedSpecialtyMiddleware(['ADMIN'])],
    deleteSpecialty: [AuthenticatedMiddleware, AuthorizatedSpecialtyMiddleware(['ADMIN'])],
  },
};

export default MutationMiddleware;
