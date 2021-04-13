import QueryResolver from './Query';
import MutationResolver from './Mutation';
import DoctorResolver from './Doctor';

export default {
  ...QueryResolver,
  ...MutationResolver,
  ...DoctorResolver,
};
