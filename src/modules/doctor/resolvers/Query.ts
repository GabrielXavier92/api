import { DoctorProvider } from '../providers';
import { DoctorModule } from '../types';

const QueryResolver: DoctorModule.Resolvers = {
  Query: {
    doctor(_, { doctorId }, { injector }: GraphQLModules.Context) {
      return injector.get(DoctorProvider).getDoctor(doctorId)!;
    },
    doctors(_, { clinicId }, { injector }: GraphQLModules.Context) {
      return injector.get(DoctorProvider).getDoctors(clinicId);
    },
  },
};
export default QueryResolver;
