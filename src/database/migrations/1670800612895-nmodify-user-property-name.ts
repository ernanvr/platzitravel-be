import { MigrationInterface, QueryRunner } from "typeorm";

export class nmodifyUserPropertyName1670800612895 implements MigrationInterface {
    name = 'nmodifyUserPropertyName1670800612895'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agent" RENAME COLUMN "firstName" TO "firstname"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agent" RENAME COLUMN "firstname" TO "firstName"`);
    }

}
