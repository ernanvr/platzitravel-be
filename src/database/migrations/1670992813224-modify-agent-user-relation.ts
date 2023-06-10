import { MigrationInterface, QueryRunner } from "typeorm";

export class modifyAgentUserRelation1670992813224 implements MigrationInterface {
    name = 'modifyAgentUserRelation1670992813224'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agent" DROP CONSTRAINT "FK_031462988904ed291dd85171a86"`);
        await queryRunner.query(`ALTER TABLE "agent" RENAME COLUMN "user_id" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "agent" RENAME CONSTRAINT "UQ_031462988904ed291dd85171a86" TO "UQ_15baaa1eb6dd8d1f0a92a17d667"`);
        await queryRunner.query(`ALTER TABLE "agent" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "agent" ADD CONSTRAINT "FK_15baaa1eb6dd8d1f0a92a17d667" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agent" DROP CONSTRAINT "FK_15baaa1eb6dd8d1f0a92a17d667"`);
        await queryRunner.query(`ALTER TABLE "agent" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "agent" RENAME CONSTRAINT "UQ_15baaa1eb6dd8d1f0a92a17d667" TO "UQ_031462988904ed291dd85171a86"`);
        await queryRunner.query(`ALTER TABLE "agent" RENAME COLUMN "userId" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "agent" ADD CONSTRAINT "FK_031462988904ed291dd85171a86" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
