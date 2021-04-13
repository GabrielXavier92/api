import { AuthenticatedMiddleware } from '../../auth/utils';
import { AuthorizatedDoctorMiddleware } from './utils';

const MutationMiddleware = {
  Mutation: {
    createDoctor: [AuthenticatedMiddleware, AuthorizatedDoctorMiddleware(['ADMIN'])],
    updateDoctor: [AuthenticatedMiddleware, AuthorizatedDoctorMiddleware(['ADMIN'])],
    deleteDoctor: [AuthenticatedMiddleware, AuthorizatedDoctorMiddleware(['ADMIN'])],
  },
};

export default MutationMiddleware;
