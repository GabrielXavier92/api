import { Injectable, ExecutionContext } from 'graphql-modules';
import { ForbiddenError } from 'apollo-server-errors';
import { SpecialtyModule } from '../types';

@Injectable()
export class SpecialtyProvider {
  @ExecutionContext()
  private context: ExecutionContext;

  async getSpecialty(id: string): Promise<SpecialtyModule.Specialty> {
    try {
      const specialty = await this.context.prisma.specialty.findUnique({ where: { id } });
      return specialty!;
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async getSpecialties({
    clinicId,
    doctorId,
  }: {
    clinicId?: string;
    doctorId?: string;
  }): Promise<SpecialtyModule.Specialty[]> {
    try {
      const specialty = await this.context.prisma.specialty.findMany({
        where: {
          clinicId: clinicId || undefined,
          doctors: doctorId ? { some: { id: doctorId } } : undefined,
        },
      });
      return specialty!;
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async createSpecialty(specialty: SpecialtyModule.SpecialtyInput): Promise<SpecialtyModule.Specialty> {
    try {
      const { name, code, clinicId } = specialty;
      return await this.context.prisma.specialty.create({
        data: {
          name,
          code,
          clinic: { connect: { id: clinicId } },
        },
      });
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async updateSpecialty(
    id: string,
    updatedSpecialty: SpecialtyModule.SpecialtyInput,
  ): Promise<SpecialtyModule.Specialty> {
    try {
      const { name, code } = updatedSpecialty;
      return await this.context.prisma.specialty.update({
        where: { id },
        data: {
          name,
          code,
        },
      });
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async deleteSpecialty(id: string): Promise<boolean> {
    try {
      await this.context.prisma.specialty.delete({
        where: { id },
      });
      return true;
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  // getSpecialtyByDoctor = (doctorId: string) => this.specialties.filter((specialty) => specialty.doctorId === doctorId);
}

export default SpecialtyProvider;
