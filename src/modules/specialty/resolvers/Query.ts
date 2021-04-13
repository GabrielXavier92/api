import { SpecialtyProvider } from '../providers';
import { SpecialtyModule } from '../types';

const QueryResolver: SpecialtyModule.Resolvers = {
  Query: {
    specialty: (_, { specialtyId }, { injector }: GraphQLModules.Context) =>
      injector.get(SpecialtyProvider).getSpecialty(specialtyId),
    specialties: (_, { clinicId }, { injector }: GraphQLModules.Context) =>
      injector.get(SpecialtyProvider).getSpecialties({
        clinicId,
      }),
  },
};
export default QueryResolver;
