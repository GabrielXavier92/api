import { ClinicProvider } from '../providers';
import { ClinicModule } from '../types';

const QueryResolver: ClinicModule.Resolvers = {
  Query: {
    clinic: (_, { clinicId }, { injector }: GraphQLModules.Context) => injector.get(ClinicProvider).getClinic(clinicId),
    clinics: (_, __, { injector }: GraphQLModules.Context) => injector.get(ClinicProvider).getClinics(),
  },
};
export default QueryResolver;
