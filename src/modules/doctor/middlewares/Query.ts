import { AuthenticatedMiddleware } from '../../auth/utils';
import { AuthorizatedDoctorMiddleware } from './utils';

const QueryMiddleware = {
  Query: {
    doctor: [AuthenticatedMiddleware, AuthorizatedDoctorMiddleware(['ADMIN'])],
    doctors: [AuthenticatedMiddleware, AuthorizatedDoctorMiddleware(['ADMIN'])],
  },
};

export default QueryMiddleware;
