import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1663995087086 implements MigrationInterface {
  name = 'init1663995087086';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "country" ("id" SERIAL NOT NULL, "country_code" character varying(8) NOT NULL, "country_name" character varying(64) NOT NULL, CONSTRAINT "PK_bf6e37c231c4f4ea56dcd887269" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "company_type" ("id" SERIAL NOT NULL, "description" character varying(50) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_b21e9ab8361b2fcc85e6c4f4fa7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "transport_company" ("id" SERIAL NOT NULL, "company_name" character varying(255) NOT NULL, "city_id" integer NOT NULL, "hq_address" character varying(255) NOT NULL, "company_type_id" integer NOT NULL, "description" text, "is_partner" boolean NOT NULL, "active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_537319775514aba1fe82e0d9cf8" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "station_type" ("id" SERIAL NOT NULL, "type_name" character varying(50) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_9edd1ac272cbad0eaa4ae1e3b39" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "station" ("id" SERIAL NOT NULL, "station_name" character varying(85) NOT NULL, "station_code" character varying(10) NOT NULL, "station_type_id" integer NOT NULL, "city_id" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_cad1b3e7182ef8df1057b82f6aa" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "city" ("id" SERIAL NOT NULL, "city_name" character varying(255) NOT NULL, "country_id" integer NOT NULL, CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "hotel" ("id" SERIAL NOT NULL, "hotel_name" character varying(255) NOT NULL, "city_id" integer NOT NULL, "hotel_address" character varying(255) NOT NULL, "details" text, "is_partner" boolean NOT NULL, "active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_3a62ac86b369b36c1a297e9ab26" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "image" ("id" SERIAL NOT NULL, "hotel_id" integer, "hotel_product_id" integer, "transport_company_id" integer, "transport_company_product_id" integer, "filename" character varying(100) NOT NULL, "url" character varying(254) NOT NULL, "bucket" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "ticket_type" ("id" SERIAL NOT NULL, "ticket_type" character varying(64) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_757d4830df239a662399edf9f24" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "transport_company_product" ("id" SERIAL NOT NULL, "transport_company_id" integer NOT NULL, "ticket_type_id" integer NOT NULL, "origin_id" integer NOT NULL, "destination_id" integer NOT NULL, "quantity" integer NOT NULL, "price" numeric(2,2) NOT NULL, "active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_e3ae7d0e53e19a02a02eb770c1f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "promo_offer_transport_product" ("id" SERIAL NOT NULL, "promo_offer_id" integer NOT NULL, "transport_product_id" integer NOT NULL, "quantity" integer NOT NULL, "price" numeric(10,2) NOT NULL, "discount_percent" numeric(10,2) NOT NULL DEFAULT '0', "final_product_price" numeric(10,2) NOT NULL, "description" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_e0d18ecf76881537ae98bfe66ed" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "promo_offer_hotel_product" ("id" SERIAL NOT NULL, "promo_offer_id" integer NOT NULL, "hotel_product_id" integer NOT NULL, "quantity" integer NOT NULL, "price" numeric(10,2) NOT NULL, "discount_percent" numeric(10,2) NOT NULL DEFAULT '0', "final_product_price" numeric(10,2) NOT NULL, "description" text, "date_start" date, "date_end" date, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_af29b5cf1834606fb38f012b89d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "promo_offer" ("id" SERIAL NOT NULL, "offer_code" character varying(8) NOT NULL, "offer_name" character varying(255) NOT NULL, "active_from" date NOT NULL, "active_to" date NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_a879c6e64ae6dd13be303f44399" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "customer" ("id" SERIAL NOT NULL, "firstname" character varying(64) NOT NULL, "lastname" character varying(64) NOT NULL, "address" character varying(255) NOT NULL, "phone" character varying(32), "mobile" character varying(32) NOT NULL, "email" character varying(254) NOT NULL, "text" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "contract" ("id" SERIAL NOT NULL, "contract_code" character varying(8) NOT NULL, "offer_id" integer NOT NULL, "agent_id" integer NOT NULL, "customer_id" integer NOT NULL, "time_signed" TIMESTAMP, "total_price" numeric(10,2) NOT NULL, "payment_date" date, "paid" boolean NOT NULL DEFAULT false, "payment_time" TIMESTAMP, "payment_amount" numeric(10,2), "refunded" boolean NOT NULL DEFAULT false, "refunded_time" TIMESTAMP, "refunded_amount" numeric(10,2), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_17c3a89f58a2997276084e706e8" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "agent" ("id" SERIAL NOT NULL, "agent_code" character varying(8) NOT NULL, "firstName" character varying(64) NOT NULL, "lastname" character varying(64) NOT NULL, "active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "UQ_e26f05aea770543332f4cec2ea3" UNIQUE ("agent_code"), CONSTRAINT "PK_1000e989398c5d4ed585cf9a46f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "offer_transport_product" ("id" SERIAL NOT NULL, "offer_id" integer NOT NULL, "transport_product_id" integer NOT NULL, "quantity" integer NOT NULL, "price" numeric(10,2) NOT NULL, "discount_percent" numeric(10,2) NOT NULL DEFAULT '0', "final_product_price" numeric(10,2) NOT NULL, "description" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_ed9887e888e823b61abbeb748c6" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "offer" ("id" SERIAL NOT NULL, "promo_offer_id" integer NOT NULL, "agent_id" integer NOT NULL, "customer_id" integer NOT NULL, "offer_code" character varying(8) NOT NULL, "offer_name" character varying(255) NOT NULL, "active_from" date NOT NULL, "active_to" date NOT NULL, "time_accepted" TIMESTAMP, "accepted" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_57c6ae1abe49201919ef68de900" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "offer_hotel_product" ("id" SERIAL NOT NULL, "offer_id" integer NOT NULL, "hotel_product_id" integer NOT NULL, "quantity" integer NOT NULL, "price" numeric(10,2) NOT NULL, "discount_percent" numeric(10,2) NOT NULL DEFAULT '0', "final_product_price" numeric(10,2) NOT NULL, "description" text, "date_start" date, "date_end" date, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_098cfa4b7b114436ece612e6dfb" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "room_type" ("id" SERIAL NOT NULL, "description" character varying(50) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_abd0f8a4c8a444a84fa2b343353" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "hotel_product" ("id" SERIAL NOT NULL, "hotel_id" integer NOT NULL, "room_type_id" integer NOT NULL, "quantity" integer NOT NULL, "service_price" numeric(10,2) NOT NULL, "details" text, "active" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_0b87dc3ed5933797bb789bfc0c2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "transport_company" ADD CONSTRAINT "FK_669f8157912cff61af5464194c6" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "transport_company" ADD CONSTRAINT "FK_537c22dc856055cd154a8d4c72f" FOREIGN KEY ("company_type_id") REFERENCES "company_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "station" ADD CONSTRAINT "FK_81ec05a276893ca8f0f5ee524f5" FOREIGN KEY ("station_type_id") REFERENCES "station_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "station" ADD CONSTRAINT "FK_ab6075a2cfc2dfc4444cff67275" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "city" ADD CONSTRAINT "FK_08af2eeb576770524fa05e26f39" FOREIGN KEY ("country_id") REFERENCES "country"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "hotel" ADD CONSTRAINT "FK_b21702b66543e890807df0fb7d0" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "image" ADD CONSTRAINT "FK_53fc08ddd5425dec101ce5cfa76" FOREIGN KEY ("hotel_id") REFERENCES "hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "image" ADD CONSTRAINT "FK_8fb6b8a2e64ecdba987f20db162" FOREIGN KEY ("hotel_product_id") REFERENCES "hotel_product"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "image" ADD CONSTRAINT "FK_114e6025ae6c7034d327162adff" FOREIGN KEY ("transport_company_id") REFERENCES "transport_company"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "image" ADD CONSTRAINT "FK_67bc44ba34db496751afdfb4961" FOREIGN KEY ("transport_company_product_id") REFERENCES "transport_company_product"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "transport_company_product" ADD CONSTRAINT "FK_2fd132cf5198b8a79e86bf82fe8" FOREIGN KEY ("ticket_type_id") REFERENCES "ticket_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "transport_company_product" ADD CONSTRAINT "FK_535434d04fb057fa445f0de4b6a" FOREIGN KEY ("transport_company_id") REFERENCES "transport_company"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "transport_company_product" ADD CONSTRAINT "FK_63fbb6da4514b85fe4e9c730e44" FOREIGN KEY ("origin_id") REFERENCES "station"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "transport_company_product" ADD CONSTRAINT "FK_e1f13e67ba660d4222ba5df610d" FOREIGN KEY ("destination_id") REFERENCES "station"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "promo_offer_transport_product" ADD CONSTRAINT "FK_4c81ae39f80bc99c2d5a6e7c671" FOREIGN KEY ("promo_offer_id") REFERENCES "promo_offer"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "promo_offer_transport_product" ADD CONSTRAINT "FK_2e504ab62794453693cddaafcde" FOREIGN KEY ("transport_product_id") REFERENCES "transport_company_product"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "promo_offer_hotel_product" ADD CONSTRAINT "FK_161f881fd19c3897b130eec0d59" FOREIGN KEY ("promo_offer_id") REFERENCES "promo_offer"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "promo_offer_hotel_product" ADD CONSTRAINT "FK_de6100256003659e87f13ac902f" FOREIGN KEY ("hotel_product_id") REFERENCES "hotel_product"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "contract" ADD CONSTRAINT "FK_002a22d67b4bc88a721aa1a6659" FOREIGN KEY ("agent_id") REFERENCES "agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "contract" ADD CONSTRAINT "FK_abdcabff39fa6c1acbb67d69a03" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "contract" ADD CONSTRAINT "FK_e6063afd733eb1fb677a315cded" FOREIGN KEY ("offer_id") REFERENCES "offer"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "offer_transport_product" ADD CONSTRAINT "FK_960aeb431e93cc22fe064c90468" FOREIGN KEY ("offer_id") REFERENCES "offer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "offer" ADD CONSTRAINT "FK_92c55bc4dd755fc8539cf81ca0a" FOREIGN KEY ("agent_id") REFERENCES "agent"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "offer" ADD CONSTRAINT "FK_2e7aef504dffda4f19956c6363a" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "offer" ADD CONSTRAINT "FK_527423914c9c1117b02704fce2e" FOREIGN KEY ("promo_offer_id") REFERENCES "promo_offer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "offer_hotel_product" ADD CONSTRAINT "FK_77deea2067406dc375e84f69073" FOREIGN KEY ("offer_id") REFERENCES "offer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "offer_hotel_product" ADD CONSTRAINT "FK_2eae39d914456f7a75a6d05f5c6" FOREIGN KEY ("hotel_product_id") REFERENCES "hotel_product"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "hotel_product" ADD CONSTRAINT "FK_e2d138e3851ced2bb0b5c79d755" FOREIGN KEY ("room_type_id") REFERENCES "room_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "hotel_product" ADD CONSTRAINT "FK_30a5fae5c299837bd3fbdab520f" FOREIGN KEY ("hotel_id") REFERENCES "hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "hotel_product" DROP CONSTRAINT "FK_30a5fae5c299837bd3fbdab520f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "hotel_product" DROP CONSTRAINT "FK_e2d138e3851ced2bb0b5c79d755"`,
    );
    await queryRunner.query(
      `ALTER TABLE "offer_hotel_product" DROP CONSTRAINT "FK_2eae39d914456f7a75a6d05f5c6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "offer_hotel_product" DROP CONSTRAINT "FK_77deea2067406dc375e84f69073"`,
    );
    await queryRunner.query(
      `ALTER TABLE "offer" DROP CONSTRAINT "FK_527423914c9c1117b02704fce2e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "offer" DROP CONSTRAINT "FK_2e7aef504dffda4f19956c6363a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "offer" DROP CONSTRAINT "FK_92c55bc4dd755fc8539cf81ca0a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "offer_transport_product" DROP CONSTRAINT "FK_960aeb431e93cc22fe064c90468"`,
    );
    await queryRunner.query(
      `ALTER TABLE "contract" DROP CONSTRAINT "FK_e6063afd733eb1fb677a315cded"`,
    );
    await queryRunner.query(
      `ALTER TABLE "contract" DROP CONSTRAINT "FK_abdcabff39fa6c1acbb67d69a03"`,
    );
    await queryRunner.query(
      `ALTER TABLE "contract" DROP CONSTRAINT "FK_002a22d67b4bc88a721aa1a6659"`,
    );
    await queryRunner.query(
      `ALTER TABLE "promo_offer_hotel_product" DROP CONSTRAINT "FK_de6100256003659e87f13ac902f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "promo_offer_hotel_product" DROP CONSTRAINT "FK_161f881fd19c3897b130eec0d59"`,
    );
    await queryRunner.query(
      `ALTER TABLE "promo_offer_transport_product" DROP CONSTRAINT "FK_2e504ab62794453693cddaafcde"`,
    );
    await queryRunner.query(
      `ALTER TABLE "promo_offer_transport_product" DROP CONSTRAINT "FK_4c81ae39f80bc99c2d5a6e7c671"`,
    );
    await queryRunner.query(
      `ALTER TABLE "transport_company_product" DROP CONSTRAINT "FK_e1f13e67ba660d4222ba5df610d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "transport_company_product" DROP CONSTRAINT "FK_63fbb6da4514b85fe4e9c730e44"`,
    );
    await queryRunner.query(
      `ALTER TABLE "transport_company_product" DROP CONSTRAINT "FK_535434d04fb057fa445f0de4b6a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "transport_company_product" DROP CONSTRAINT "FK_2fd132cf5198b8a79e86bf82fe8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "image" DROP CONSTRAINT "FK_67bc44ba34db496751afdfb4961"`,
    );
    await queryRunner.query(
      `ALTER TABLE "image" DROP CONSTRAINT "FK_114e6025ae6c7034d327162adff"`,
    );
    await queryRunner.query(
      `ALTER TABLE "image" DROP CONSTRAINT "FK_8fb6b8a2e64ecdba987f20db162"`,
    );
    await queryRunner.query(
      `ALTER TABLE "image" DROP CONSTRAINT "FK_53fc08ddd5425dec101ce5cfa76"`,
    );
    await queryRunner.query(
      `ALTER TABLE "hotel" DROP CONSTRAINT "FK_b21702b66543e890807df0fb7d0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "city" DROP CONSTRAINT "FK_08af2eeb576770524fa05e26f39"`,
    );
    await queryRunner.query(
      `ALTER TABLE "station" DROP CONSTRAINT "FK_ab6075a2cfc2dfc4444cff67275"`,
    );
    await queryRunner.query(
      `ALTER TABLE "station" DROP CONSTRAINT "FK_81ec05a276893ca8f0f5ee524f5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "transport_company" DROP CONSTRAINT "FK_537c22dc856055cd154a8d4c72f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "transport_company" DROP CONSTRAINT "FK_669f8157912cff61af5464194c6"`,
    );
    await queryRunner.query(`DROP TABLE "hotel_product"`);
    await queryRunner.query(`DROP TABLE "room_type"`);
    await queryRunner.query(`DROP TABLE "offer_hotel_product"`);
    await queryRunner.query(`DROP TABLE "offer"`);
    await queryRunner.query(`DROP TABLE "offer_transport_product"`);
    await queryRunner.query(`DROP TABLE "agent"`);
    await queryRunner.query(`DROP TABLE "contract"`);
    await queryRunner.query(`DROP TABLE "customer"`);
    await queryRunner.query(`DROP TABLE "promo_offer"`);
    await queryRunner.query(`DROP TABLE "promo_offer_hotel_product"`);
    await queryRunner.query(`DROP TABLE "promo_offer_transport_product"`);
    await queryRunner.query(`DROP TABLE "transport_company_product"`);
    await queryRunner.query(`DROP TABLE "ticket_type"`);
    await queryRunner.query(`DROP TABLE "image"`);
    await queryRunner.query(`DROP TABLE "hotel"`);
    await queryRunner.query(`DROP TABLE "city"`);
    await queryRunner.query(`DROP TABLE "station"`);
    await queryRunner.query(`DROP TABLE "station_type"`);
    await queryRunner.query(`DROP TABLE "transport_company"`);
    await queryRunner.query(`DROP TABLE "company_type"`);
    await queryRunner.query(`DROP TABLE "country"`);
  }
}
