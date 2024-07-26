import { ISchedule } from '../../../infra/entities/ScheduleEntity';
import { Schedule } from '../../entities/Schedule';

export interface IScheduleRepository {
  list: () => Promise<Array<ISchedule>>;
  findOne: (id: string) => Promise<ISchedule>;
  save(schedule: ISchedule): Promise<Schedule>;
  update(id: string, schedule: Partial<ISchedule>): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}
