import { ScheduleStatus } from '../../domain/entities/Schedule';

export interface ISchedule {
  clientId: string;
  doctorId: string;
  schedule: Date;
  status: ScheduleStatus;
}
