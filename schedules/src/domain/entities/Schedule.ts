import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

export enum ScheduleStatus {
  'PENDING' = 'PENDING',
  'AWAITING_PAYMENT' = 'AWAITING_PAYMENT',
  'CONFIRMED' = 'CONFIRMED',
  'EXECUTED' = 'EXECUTED',
  'CANCELED' = 'CANCELED',
}

@Entity('Schedules')
export class Schedule {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar' })
  clientId!: string;

  @Column({ type: 'varchar' })
  doctorId!: string;

  @Column({ type: 'date' })
  schedule!: Date;

  @Column({ type: 'varchar' })
  status!: ScheduleStatus;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
