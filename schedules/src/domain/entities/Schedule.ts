import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

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

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
