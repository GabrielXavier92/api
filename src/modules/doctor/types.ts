/* eslint-disable */
import * as Types from "../../types/general-module";
import * as gm from "graphql-modules";
export namespace DoctorModule {
  interface DefinedFields {
    Query: 'doctor' | 'doctors';
    Mutation: 'createDoctor' | 'updateDoctor' | 'deleteDoctor';
    Doctor: 'id' | 'name' | 'cro' | 'celphone' | 'email' | 'country' | 'state' | 'city' | 'address' | 'complement';
  };
  
  interface DefinedInputFields {
    DoctorInput: 'clinicId' | 'name' | 'cro' | 'celphone' | 'email' | 'country' | 'state' | 'city' | 'address' | 'complement' | 'specialties';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Doctor = Pick<Types.Doctor, DefinedFields['Doctor']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type DoctorInput = Pick<Types.DoctorInput, DefinedInputFields['DoctorInput']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type DoctorResolvers = Pick<Types.DoctorResolvers, DefinedFields['Doctor'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    Doctor?: DoctorResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      doctor?: gm.Middleware[];
      doctors?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createDoctor?: gm.Middleware[];
      updateDoctor?: gm.Middleware[];
      deleteDoctor?: gm.Middleware[];
    };
    Doctor?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      cro?: gm.Middleware[];
      celphone?: gm.Middleware[];
      email?: gm.Middleware[];
      country?: gm.Middleware[];
      state?: gm.Middleware[];
      city?: gm.Middleware[];
      address?: gm.Middleware[];
      complement?: gm.Middleware[];
    };
  };
}