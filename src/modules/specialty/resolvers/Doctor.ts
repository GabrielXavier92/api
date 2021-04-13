import { SpecialtyModule } from '../types';
import { SpecialtyProvider } from '../providers';

const DoctorResolver: SpecialtyModule.Resolvers = {
  Doctor: {
    specialties: (doctor, _, { injector }: GraphQLModules.Context) =>
      injector.get(SpecialtyProvider).getSpecialties({
        doctorId: doctor.id,
      }),
  },
};

export default DoctorResolver;
