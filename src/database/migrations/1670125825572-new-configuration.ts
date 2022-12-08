import { MigrationInterface, QueryRunner } from "typeorm";

export class newConfiguration1670125825572 implements MigrationInterface {
    name = 'newConfiguration1670125825572'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_53fc08ddd5425dec101ce5cfa76"`);
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_8fb6b8a2e64ecdba987f20db162"`);
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_114e6025ae6c7034d327162adff"`);
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_67bc44ba34db496751afdfb4961"`);
        await queryRunner.query(`CREATE TABLE "offer_supplier_product" ("id" SERIAL NOT NULL, "offer_id" integer NOT NULL, "Supplier_product_id" integer NOT NULL, "quantity" integer NOT NULL, "cost" numeric(10,2) NOT NULL, "price" numeric(10,2) NOT NULL, "promo_price" numeric(10,2), "description" text, "date_start" date, "date_end" date, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_bbd5ab267b0c0b739b62f38b3e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "supplier" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "city_id" integer NOT NULL, "supplier_address" character varying(255) NOT NULL, "details" text, "is_partner" boolean NOT NULL, "active" boolean NOT NULL DEFAULT true, "company_type_id" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_2bc0d2cab6276144d2ff98a2828" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "supplier_product" ("id" SERIAL NOT NULL, "Supplier_id" integer NOT NULL, "quantity" integer NOT NULL, "service_price" numeric(10,2) NOT NULL, "details" text, "active" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_18c14b1d767aaa922805766e1d7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "promo_offer_supplier_product" ("id" SERIAL NOT NULL, "promo_offer_id" integer NOT NULL, "Supplier_product_id" integer NOT NULL, "quantity" integer NOT NULL, "cost" numeric(10,2) NOT NULL, "price" numeric(10,2) NOT NULL, "promo_price" numeric(10,2), "description" text, "date_start" date, "date_end" date, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_4c21a0a536e7a7c9681dbee1f0b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "hotel_id"`);
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "hotel_product_id"`);
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "transport_company_id"`);
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "transport_company_product_id"`);
        await queryRunner.query(`ALTER TABLE "image" ADD "Supplier_id" integer`);
        await queryRunner.query(`ALTER TABLE "image" ADD "Supplier_product_id" integer`);
        await queryRunner.query(`ALTER TABLE "offer_supplier_product" ADD CONSTRAINT "FK_f9553a2ee184bf494ef2192c4d9" FOREIGN KEY ("offer_id") REFERENCES "offer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "offer_supplier_product" ADD CONSTRAINT "FK_8b1f3f99fb32a4aaa8f465a81a5" FOREIGN KEY ("Supplier_product_id") REFERENCES "supplier_product"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_db5ca6ad48c05f3442a4df02575" FOREIGN KEY ("Supplier_id") REFERENCES "supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_658b2245456550d1eecd095bc2a" FOREIGN KEY ("Supplier_product_id") REFERENCES "supplier_product"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "supplier" ADD CONSTRAINT "FK_ea7f687cc76aa53bd890386b250" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "supplier" ADD CONSTRAINT "FK_73903cb8c67cc974cbc7b94cdb4" FOREIGN KEY ("company_type_id") REFERENCES "company_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "supplier_product" ADD CONSTRAINT "FK_d7a6308794d76028597a5922826" FOREIGN KEY ("Supplier_id") REFERENCES "supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "promo_offer_supplier_product" ADD CONSTRAINT "FK_155c9357ead6cc7e7aea34c7ce5" FOREIGN KEY ("promo_offer_id") REFERENCES "promo_offer"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "promo_offer_supplier_product" ADD CONSTRAINT "FK_991d81ea34aa484e53507370519" FOREIGN KEY ("Supplier_product_id") REFERENCES "supplier_product"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "promo_offer_supplier_product" DROP CONSTRAINT "FK_991d81ea34aa484e53507370519"`);
        await queryRunner.query(`ALTER TABLE "promo_offer_supplier_product" DROP CONSTRAINT "FK_155c9357ead6cc7e7aea34c7ce5"`);
        await queryRunner.query(`ALTER TABLE "supplier_product" DROP CONSTRAINT "FK_d7a6308794d76028597a5922826"`);
        await queryRunner.query(`ALTER TABLE "supplier" DROP CONSTRAINT "FK_73903cb8c67cc974cbc7b94cdb4"`);
        await queryRunner.query(`ALTER TABLE "supplier" DROP CONSTRAINT "FK_ea7f687cc76aa53bd890386b250"`);
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_658b2245456550d1eecd095bc2a"`);
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_db5ca6ad48c05f3442a4df02575"`);
        await queryRunner.query(`ALTER TABLE "offer_supplier_product" DROP CONSTRAINT "FK_8b1f3f99fb32a4aaa8f465a81a5"`);
        await queryRunner.query(`ALTER TABLE "offer_supplier_product" DROP CONSTRAINT "FK_f9553a2ee184bf494ef2192c4d9"`);
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "Supplier_product_id"`);
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "Supplier_id"`);
        await queryRunner.query(`ALTER TABLE "image" ADD "transport_company_product_id" integer`);
        await queryRunner.query(`ALTER TABLE "image" ADD "transport_company_id" integer`);
        await queryRunner.query(`ALTER TABLE "image" ADD "hotel_product_id" integer`);
        await queryRunner.query(`ALTER TABLE "image" ADD "hotel_id" integer`);
        await queryRunner.query(`DROP TABLE "promo_offer_supplier_product"`);
        await queryRunner.query(`DROP TABLE "supplier_product"`);
        await queryRunner.query(`DROP TABLE "supplier"`);
        await queryRunner.query(`DROP TABLE "offer_supplier_product"`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_67bc44ba34db496751afdfb4961" FOREIGN KEY ("transport_company_product_id") REFERENCES "transport_company_product"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_114e6025ae6c7034d327162adff" FOREIGN KEY ("transport_company_id") REFERENCES "transport_company"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_8fb6b8a2e64ecdba987f20db162" FOREIGN KEY ("hotel_product_id") REFERENCES "hotel_product"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_53fc08ddd5425dec101ce5cfa76" FOREIGN KEY ("hotel_id") REFERENCES "hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
    }

}
