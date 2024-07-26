import { Repository } from 'typeorm';
import { DbConnection } from '../../data/data-sources/database/PostgreSQLConnection';
import { ISchedule } from '../../infra/entities/ScheduleEntity';
import { IScheduleRepository } from '../interfaces/repositories/IScheduleRepository';
import { Schedule } from '../entities/Schedule';

export default class ScheduleRepository implements IScheduleRepository {
  private connection: typeof DbConnection;

  constructor() {
    this.connection = DbConnection;
  }
  private getRepo(): Repository<Schedule> {
    return this.connection.getConnection().getRepository(Schedule);
  }

  async list(): Promise<Array<ISchedule>> {
    return this.getRepo().find();
  }

  async findOne(id: string): Promise<ISchedule> {
    const schedule = await this.getRepo().findOneBy({ id });
    if (!schedule) {
      throw new Error('There is no schedule with that ID');
    }
    return schedule as unknown as Schedule;
  }

  async save(schedule: ISchedule): Promise<Schedule> {
    return this.getRepo().save(schedule);
  }

  async update(id: string, newSchedule: Date): Promise<boolean> {
    try {
      await this.getRepo().update({ id }, { schedule: newSchedule });
      return true;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string): Promise<boolean> {
    const deleteResult = await this.getRepo().delete(id);
    if (deleteResult.affected) {
      return true;
    }
    return false;
  }
}
