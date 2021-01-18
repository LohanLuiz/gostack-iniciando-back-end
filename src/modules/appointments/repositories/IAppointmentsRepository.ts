import Appoiment from '@modules/appointments/infra/typeorm/entities/Appointment';

export default interface IAppointmentsRepository {
  findByDate(date: Date): Promise<Appoiment | undefined>;
}
