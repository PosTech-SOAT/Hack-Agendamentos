import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddScheduleStatus1721961616524 implements MigrationInterface {
  name = 'AddScheduleStatus1721961616524';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Schedules" ADD "status" character varying`,
    );
    await queryRunner.query(
      `UPDATE "Schedules" SET "status" = 'new_value' WHERE "status" IS NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "Schedules" ALTER COLUMN "status" SET NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "Schedules" DROP COLUMN "status"`);
  }
}
