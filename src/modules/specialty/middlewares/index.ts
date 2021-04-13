import QueryMiddleware from './Query';
import MutationMiddleware from './Mutation';

export default {
  ...QueryMiddleware,
  ...MutationMiddleware,
};
