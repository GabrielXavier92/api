import QueryResolver from './Query';
import MutationResolver from './Mutation';

export default {
  ...QueryResolver,
  ...MutationResolver,
};
