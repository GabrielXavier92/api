import { AuthenticationError, ForbiddenError } from 'apollo-server-errors';

const AuthorizatedSpecialtyMiddleware = (roles: string[]) => async (
  { args, context }: { args: any; context: GraphQLModules.Context },
  next: any,
) => {
  if (!context.user?.clinics.length) throw new AuthenticationError('You do not have clinics yet');

  const checkClinic = (clinicId: string): boolean =>
    !!context.user?.clinics.find(
      (clinic) =>
        clinic.userId === context.user?.id &&
        clinic.clinicId === clinicId &&
        roles.find((role) => clinic.role === role),
    );

  const checkSpecialtyOwner = async (): Promise<boolean> => {
    const { specialtyId, specialtyInput, clinicId } = args;

    if (specialtyId) {
      const specialty = await context.prisma.specialty.findUnique({ where: { id: specialtyId } });

      if (!specialty) throw new ForbiddenError('Invalid doctorId');

      return checkClinic(specialty.clinicId);
    }
    return checkClinic(specialtyInput?.clinicId || clinicId);
  };

  const isAuthorizated = await checkSpecialtyOwner();

  if (!isAuthorizated) throw new AuthenticationError('You do not have permission');

  return next();
};

export default AuthorizatedSpecialtyMiddleware;
