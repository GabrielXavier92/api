/* eslint-disable */
import * as Types from "../../types/general-module";
import * as gm from "graphql-modules";
export namespace SpecialtyModule {
  interface DefinedFields {
    Query: 'specialty' | 'specialties';
    Mutation: 'createSpecialty' | 'updateSpecialty' | 'deleteSpecialty';
    Specialty: 'id' | 'name' | 'code';
    Doctor: 'specialties';
  };
  
  interface DefinedInputFields {
    SpecialtyInput: 'clinicId' | 'name' | 'code';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Specialty = Pick<Types.Specialty, DefinedFields['Specialty']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type SpecialtyInput = Pick<Types.SpecialtyInput, DefinedInputFields['SpecialtyInput']>;
  export type Doctor = Types.Doctor;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type SpecialtyResolvers = Pick<Types.SpecialtyResolvers, DefinedFields['Specialty'] | '__isTypeOf'>;
  export type DoctorResolvers = Pick<Types.DoctorResolvers, DefinedFields['Doctor']>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    Specialty?: SpecialtyResolvers;
    Doctor?: DoctorResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      specialty?: gm.Middleware[];
      specialties?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createSpecialty?: gm.Middleware[];
      updateSpecialty?: gm.Middleware[];
      deleteSpecialty?: gm.Middleware[];
    };
    Doctor?: {
      '*'?: gm.Middleware[];
      specialties?: gm.Middleware[];
    };
    Specialty?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      code?: gm.Middleware[];
    };
  };
}