import { Request, Response } from 'express';
import { IScheduleService } from '../../domain/interfaces/services/IScheduleService';
import ScheduleService from '../../domain/services/ScheduleService';
import { ISchedule } from '../entities/ScheduleEntity';

export default class SchedulesController {
  private scheduleService: IScheduleService;

  constructor() {
    this.scheduleService = new ScheduleService();
  }

  async list(request: Request, response: Response) {
    const schedules = await this.scheduleService.list();
    return response.status(200).json({ schedules: schedules });
  }

  async findOne(request: Request, response: Response) {
    try {
      const schedules = await this.scheduleService.findOne(request.params.id);
      return response.status(200).json({ schedules: schedules });
    } catch (error) {
      const { message } = error as Record<string, string>;

      return response.status(404).json({ message });
    }
  }

  async create(request: Request, response: Response) {
    const { pacientId, doctorId, schedule } = request.body;
    const schedules = await this.scheduleService.create(
      pacientId,
      doctorId,
      schedule,
    );
    return response
      .status(201)
      .json({ message: 'created successfully', data: schedules });
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const body = request.body as Partial<ISchedule>;
    try {
      if (!Object.keys(body).length || !id) {
        throw new Error('Invalid schedule ID or Date!');
      }
      await this.scheduleService.update(id, body);
      return response
        .status(200)
        .json({ message: 'Schedule updated successfully' });
    } catch (error) {
      const { message } = error as Record<string, string>;
      return response.status(400).json({ message });
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;
      await this.scheduleService.delete(id);
      return response
        .status(200)
        .json({ message: 'Schedule deleted successfully' });
    } catch {
      return response
        .status(400)
        .json({ message: 'An error ocurred while deleting the schedule' });
    }
  }
}
