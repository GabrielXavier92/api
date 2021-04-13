import { Injectable, ExecutionContext } from 'graphql-modules';
import { ForbiddenError } from 'apollo-server-errors';
import { DoctorModule } from '../types';

@Injectable()
export class DoctorProvider {
  @ExecutionContext()
  private context: ExecutionContext;

  async getDoctor(id: string): Promise<DoctorModule.Doctor> {
    try {
      const doctor = await this.context.prisma.doctor.findUnique({ where: { id } });
      return doctor!;
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async getDoctors(clinicId: string): Promise<DoctorModule.Doctor[]> {
    try {
      return await this.context.prisma.doctor.findMany({
        where: {
          clinicId,
        },
      });
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async createDoctor(doctor: DoctorModule.DoctorInput): Promise<DoctorModule.Doctor> {
    try {
      const specialties = doctor.specialties.map((spec) => {
        const specialtie = { id: spec };
        return specialtie;
      });

      const { address, cro, name, celphone, city, complement, country, email, state } = doctor;

      return await this.context.prisma.doctor.create({
        data: {
          address,
          cro,
          name,
          celphone,
          city,
          complement,
          country,
          email,
          state,
          clinic: { connect: { id: doctor.clinicId } },
          specialties: { connect: specialties },
        },
      });
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async updateDoctor(id: string, updatedDoctor: DoctorModule.DoctorInput): Promise<DoctorModule.Doctor> {
    try {
      const specialties = updatedDoctor.specialties.map((spec) => {
        const specialtie = { id: spec };
        return specialtie;
      });

      const { address, cro, name, celphone, city, complement, country, email, state } = updatedDoctor;

      return await this.context.prisma.doctor.update({
        where: { id },
        data: {
          address,
          cro,
          name,
          celphone,
          city,
          complement,
          country,
          email,
          state,
          specialties: {
            set: specialties,
          },
        },
      });
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }

  async deleteDoctor(id: string): Promise<boolean> {
    try {
      await this.context.prisma.doctor.delete({
        where: { id },
      });
      return true;
    } catch (e) {
      throw new ForbiddenError(e);
    }
  }
}

export default DoctorProvider;
