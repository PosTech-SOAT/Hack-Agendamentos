import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1721957240238 implements MigrationInterface {
    name = 'Init1721957240238'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Schedules" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "clientId" character varying NOT NULL, "doctorId" character varying NOT NULL, "schedule" date NOT NULL, CONSTRAINT "PK_364f08c10e5a443bf4a2125e702" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Schedules"`);
    }

}
