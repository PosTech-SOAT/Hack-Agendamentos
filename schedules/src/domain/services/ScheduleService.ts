import { IScheduleRepository } from '../interfaces/repositories/IScheduleRepository';
import { IScheduleService } from '../interfaces/services/IScheduleService';
import ScheduleRepository from '../repositories/ScheduleRepository';

export default class ScheduleService implements IScheduleService {
  private scheduleRepository: IScheduleRepository;

  constructor() {
    this.scheduleRepository = new ScheduleRepository();
  }

  async list() {
    return this.scheduleRepository.list();
  }

  async findOne(id: string) {
    return this.scheduleRepository.findOne(id);
  }

  async create(pacientId: string, doctorId: string, scheduleDate: string) {
    return this.scheduleRepository.save({
      clientId: pacientId,
      doctorId,
      schedule: new Date(scheduleDate),
    });
  }

  async update(id: string, newSchedule: string): Promise<boolean> {
    try {
      const updateResult = await this.scheduleRepository.update(
        id,
        new Date(newSchedule),
      );
      if (updateResult) {
        return true;
      }
      return false;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string): Promise<boolean> {
    const deleteResult = await this.scheduleRepository.delete(id);
    if (deleteResult) {
      return true;
    }
    return false;
  }
}
