import { DoctorProvider } from '../providers';
import { DoctorModule } from '../types';

const MutationResolver: DoctorModule.Resolvers = {
  Mutation: {
    createDoctor: (_, { doctorInput }, { injector }: GraphQLModules.Context) =>
      injector.get(DoctorProvider).createDoctor(doctorInput)!,
    updateDoctor: (_, { doctorId, doctorInput }, { injector }: GraphQLModules.Context) =>
      injector.get(DoctorProvider).updateDoctor(doctorId, doctorInput)!,
    deleteDoctor: (_, { doctorId }, { injector }: GraphQLModules.Context) =>
      injector.get(DoctorProvider).deleteDoctor(doctorId)!,
  },
};
export default MutationResolver;
