import { ISchedule } from '../../../infra/entities/ScheduleEntity';
import { Schedule } from '../../entities/Schedule';

export interface IScheduleService {
  list: () => Promise<Array<ISchedule>>;
  findOne: (id: string) => Promise<ISchedule>;
  create: (
    pacientId: string,
    doctorId: string,
    scheduleDate: string,
  ) => Promise<Schedule>;
  update(id: string, schedule: Partial<ISchedule>): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}
