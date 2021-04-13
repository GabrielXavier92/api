import { SpecialtyProvider } from '../providers';
import { SpecialtyModule } from '../types';

const MutationResolver: SpecialtyModule.Resolvers = {
  Mutation: {
    createSpecialty(_, { specialtyInput }, { injector }: GraphQLModules.Context) {
      return injector.get(SpecialtyProvider).createSpecialty(specialtyInput);
    },
    updateSpecialty(_, { specialtyId, specialtyInput }, { injector }: GraphQLModules.Context) {
      return injector.get(SpecialtyProvider).updateSpecialty(specialtyId, specialtyInput);
    },
    deleteSpecialty(_, { specialtyId }, { injector }: GraphQLModules.Context) {
      return injector.get(SpecialtyProvider).deleteSpecialty(specialtyId);
    },
  },
};

export default MutationResolver;
