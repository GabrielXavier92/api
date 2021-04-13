import { AuthenticationError, ForbiddenError } from 'apollo-server-errors';

const AuthorizatedDoctorMiddleware = (roles: string[]) => async (
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

  const checkDoctorOwner = async (): Promise<boolean> => {
    const { doctorId, doctorInput, clinicId } = args;

    if (doctorId) {
      const doctor = await context.prisma.doctor.findUnique({ where: { id: doctorId } });

      if (!doctor) throw new ForbiddenError('Invalid doctorId');

      return checkClinic(doctor.clinicId);
    }
    return checkClinic(doctorInput?.clinicId || clinicId);
  };

  const isAuthorizated = await checkDoctorOwner();

  if (!isAuthorizated) throw new AuthenticationError('You do not have permission');

  return next();
};

export default AuthorizatedDoctorMiddleware;
