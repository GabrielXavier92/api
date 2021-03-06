import { ClinicProvider } from '../providers';
import { ClinicModule } from '../types';

const QueryResolver: ClinicModule.Resolvers = {
  Mutation: {
    createClinic: (_, { clinicInput }, { injector }: GraphQLModules.Context) =>
      injector.get(ClinicProvider).createClinic(clinicInput),
    updateClinic: (_, { clinicId, clinicInput }, { injector }: GraphQLModules.Context) =>
      injector.get(ClinicProvider).updateClinic(clinicId, clinicInput),
    deleteClinic: (_, { clinicId }, { injector }: GraphQLModules.Context) =>
      injector.get(ClinicProvider).deleteClinic(clinicId),
  },
};
export default QueryResolver;
