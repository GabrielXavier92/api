import { AuthenticationError } from 'apollo-server-errors';

const AuthorizatedMiddleware = (roles: string[]) => (
  { args, context }: { args: any; context: GraphQLModules.Context },
  next: any,
) => {
  if (!context.user?.clinics.length) throw new AuthenticationError('You do not have clinics already');

  const hasArgs = !!args.clinicId;
  // check if user have clinic and have the right role
  const isAuthorizated = context.user?.clinics.find(
    (clinic) =>
      clinic.userId === context.user?.id &&
      (hasArgs ? clinic.clinicId === args.clinicId : true) &&
      roles.find((role) => clinic.role === role),
  );
  if (!isAuthorizated) throw new AuthenticationError('You do not have permission');

  return next();
};

export default AuthorizatedMiddleware;
