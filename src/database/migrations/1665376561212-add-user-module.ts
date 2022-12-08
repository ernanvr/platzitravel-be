import { MigrationInterface, QueryRunner } from 'typeorm';

export class addUserModule1665376561212 implements MigrationInterface {
  name = 'addUserModule1665376561212';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying(64) NOT NULL, "password" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "role" character varying(64) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "email"`);
    await queryRunner.query(
      `ALTER TABLE "customer" ADD "userId" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "customer" ADD "deleted_at" TIMESTAMP`,
    );
    await queryRunner.query(`ALTER TABLE "customer" ADD "user_id" integer`);
    await queryRunner.query(
      `ALTER TABLE "customer" ADD CONSTRAINT "UQ_5d1f609371a285123294fddcf3a" UNIQUE ("user_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "agent" ADD "user_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "agent" ADD CONSTRAINT "UQ_031462988904ed291dd85171a86" UNIQUE ("user_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "customer" ADD CONSTRAINT "FK_5d1f609371a285123294fddcf3a" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "agent" ADD CONSTRAINT "FK_031462988904ed291dd85171a86" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "agent" DROP CONSTRAINT "FK_031462988904ed291dd85171a86"`,
    );
    await queryRunner.query(
      `ALTER TABLE "customer" DROP CONSTRAINT "FK_5d1f609371a285123294fddcf3a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "agent" DROP CONSTRAINT "UQ_031462988904ed291dd85171a86"`,
    );
    await queryRunner.query(`ALTER TABLE "agent" DROP COLUMN "user_id"`);
    await queryRunner.query(
      `ALTER TABLE "customer" DROP CONSTRAINT "UQ_5d1f609371a285123294fddcf3a"`,
    );
    await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "user_id"`);
    await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "deleted_at"`);
    await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "userId"`);
    await queryRunner.query(
      `ALTER TABLE "customer" ADD "email" character varying(254) NOT NULL`,
    );
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
