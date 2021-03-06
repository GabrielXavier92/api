import { SpecialtyProvider } from '../providers';
import { SpecialtyModule } from '../types';

const MutationResolver: SpecialtyModule.Resolvers = {
  Mutation: {
    createSpecialty: (_, { specialtyInput }, { injector }: GraphQLModules.Context) =>
      injector.get(SpecialtyProvider).createSpecialty(specialtyInput),
    updateSpecialty: (_, { specialtyId, specialtyInput }, { injector }: GraphQLModules.Context) =>
      injector.get(SpecialtyProvider).updateSpecialty(specialtyId, specialtyInput),
    deleteSpecialty: (_, { specialtyId }, { injector }: GraphQLModules.Context) =>
      injector.get(SpecialtyProvider).deleteSpecialty(specialtyId),
  },
};

export default MutationResolver;
