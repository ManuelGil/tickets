import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1681760085745 implements MigrationInterface {
  name = 'Init1681760085745';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "priorities" (
                "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "title" character varying(100),
                "is_activated" boolean NOT NULL DEFAULT true,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                CONSTRAINT "PK_47b944ec176e2127edac6308ff0" PRIMARY KEY ("uuid")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "users" (
                "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "first_name" character varying(100),
                "last_name" character varying(100),
                "username" character varying(100) NOT NULL,
                "email" character varying(320),
                "password" character varying(255) NOT NULL,
                "phone" character varying(20),
                "roles" text NOT NULL DEFAULT '["guest"]',
                "is_activated" boolean NOT NULL DEFAULT true,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"),
                CONSTRAINT "PK_951b8f1dfc94ac1d0301a14b7e1" PRIMARY KEY ("uuid")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "annotations" (
                "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "observations" text,
                "is_activated" boolean NOT NULL DEFAULT true,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                "ticket_id" uuid,
                "priority_id" uuid,
                "user_id" uuid,
                CONSTRAINT "PK_32db683a555d07ca84e86ad2b36" PRIMARY KEY ("uuid")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "products" (
                "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "title" character varying(100),
                "is_activated" boolean NOT NULL DEFAULT true,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                CONSTRAINT "PK_98086f14e190574534d5129cd7c" PRIMARY KEY ("uuid")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "categories" (
                "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "title" character varying(100),
                "is_activated" boolean NOT NULL DEFAULT true,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                "product_id" uuid,
                "parent_id" uuid,
                CONSTRAINT "PK_a4b5917e7297f757879582e1458" PRIMARY KEY ("uuid")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "groups" (
                "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "title" character varying(100),
                "is_activated" boolean NOT NULL DEFAULT true,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                CONSTRAINT "PK_4c027a19c2393cef5ced3bf458e" PRIMARY KEY ("uuid")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "tickets" (
                "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "code" character varying(16) NOT NULL,
                "title" character varying(100),
                "description" text,
                "is_activated" boolean NOT NULL DEFAULT true,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                "group_id" uuid,
                CONSTRAINT "UQ_c6e20a830c0f8b571abd331b775" UNIQUE ("code"),
                CONSTRAINT "PK_e522585e9439011828e606834e4" PRIMARY KEY ("uuid")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "message" (
                "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "full_name" character varying(200),
                "data" text,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                "message_id" uuid,
                CONSTRAINT "PK_3c5cb33791204380214230107d5" PRIMARY KEY ("uuid")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "categories_has_tickets" (
                "category_id" uuid NOT NULL,
                "ticket_id" uuid NOT NULL,
                CONSTRAINT "PK_b11517c3ee4612df4d349f65a55" PRIMARY KEY ("category_id", "ticket_id")
            )
        `);
    await queryRunner.query(`
            CREATE INDEX "IDX_f2a6dc0b735efe054aec2c81ae" ON "categories_has_tickets" ("category_id")
        `);
    await queryRunner.query(`
            CREATE INDEX "IDX_faaf3cda25e4437e2f6d12a579" ON "categories_has_tickets" ("ticket_id")
        `);
    await queryRunner.query(`
            CREATE TABLE "categories_closure_closure" (
                "uuid_ancestor" uuid NOT NULL,
                "uuid_descendant" uuid NOT NULL,
                CONSTRAINT "PK_e55c9fd21e41d3464746d7801ed" PRIMARY KEY ("uuid_ancestor", "uuid_descendant")
            )
        `);
    await queryRunner.query(`
            CREATE INDEX "IDX_2313dd172fab3ec049442eeff0" ON "categories_closure_closure" ("uuid_ancestor")
        `);
    await queryRunner.query(`
            CREATE INDEX "IDX_83e3c86705953dd7eb8547578c" ON "categories_closure_closure" ("uuid_descendant")
        `);
    await queryRunner.query(`
            ALTER TABLE "annotations"
            ADD CONSTRAINT "FK_0cdc4586914e8cef8a1e9513d18" FOREIGN KEY ("ticket_id") REFERENCES "tickets"("uuid") ON DELETE
            SET NULL ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "annotations"
            ADD CONSTRAINT "FK_5bc880f84e1bf38675b9ae6ca2e" FOREIGN KEY ("priority_id") REFERENCES "priorities"("uuid") ON DELETE
            SET NULL ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "annotations"
            ADD CONSTRAINT "FK_c831c71c5aa60b0e020b98396ee" FOREIGN KEY ("user_id") REFERENCES "users"("uuid") ON DELETE
            SET NULL ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "categories"
            ADD CONSTRAINT "FK_09c384ee09c9b0745c9d0544a38" FOREIGN KEY ("product_id") REFERENCES "products"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "categories"
            ADD CONSTRAINT "FK_88cea2dc9c31951d06437879b40" FOREIGN KEY ("parent_id") REFERENCES "categories"("uuid") ON DELETE
            SET NULL ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "tickets"
            ADD CONSTRAINT "FK_6c7c96226788b4ce372cb982db9" FOREIGN KEY ("group_id") REFERENCES "groups"("uuid") ON DELETE
            SET NULL ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "message"
            ADD CONSTRAINT "FK_06a563cdbd963a9f7cbcb25c447" FOREIGN KEY ("message_id") REFERENCES "tickets"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "categories_has_tickets"
            ADD CONSTRAINT "FK_f2a6dc0b735efe054aec2c81ae6" FOREIGN KEY ("category_id") REFERENCES "categories"("uuid") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "categories_has_tickets"
            ADD CONSTRAINT "FK_faaf3cda25e4437e2f6d12a5797" FOREIGN KEY ("ticket_id") REFERENCES "tickets"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "categories_closure_closure"
            ADD CONSTRAINT "FK_2313dd172fab3ec049442eeff05" FOREIGN KEY ("uuid_ancestor") REFERENCES "categories"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "categories_closure_closure"
            ADD CONSTRAINT "FK_83e3c86705953dd7eb8547578c6" FOREIGN KEY ("uuid_descendant") REFERENCES "categories"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "categories_closure_closure" DROP CONSTRAINT "FK_83e3c86705953dd7eb8547578c6"
        `);
    await queryRunner.query(`
            ALTER TABLE "categories_closure_closure" DROP CONSTRAINT "FK_2313dd172fab3ec049442eeff05"
        `);
    await queryRunner.query(`
            ALTER TABLE "categories_has_tickets" DROP CONSTRAINT "FK_faaf3cda25e4437e2f6d12a5797"
        `);
    await queryRunner.query(`
            ALTER TABLE "categories_has_tickets" DROP CONSTRAINT "FK_f2a6dc0b735efe054aec2c81ae6"
        `);
    await queryRunner.query(`
            ALTER TABLE "message" DROP CONSTRAINT "FK_06a563cdbd963a9f7cbcb25c447"
        `);
    await queryRunner.query(`
            ALTER TABLE "tickets" DROP CONSTRAINT "FK_6c7c96226788b4ce372cb982db9"
        `);
    await queryRunner.query(`
            ALTER TABLE "categories" DROP CONSTRAINT "FK_88cea2dc9c31951d06437879b40"
        `);
    await queryRunner.query(`
            ALTER TABLE "categories" DROP CONSTRAINT "FK_09c384ee09c9b0745c9d0544a38"
        `);
    await queryRunner.query(`
            ALTER TABLE "annotations" DROP CONSTRAINT "FK_c831c71c5aa60b0e020b98396ee"
        `);
    await queryRunner.query(`
            ALTER TABLE "annotations" DROP CONSTRAINT "FK_5bc880f84e1bf38675b9ae6ca2e"
        `);
    await queryRunner.query(`
            ALTER TABLE "annotations" DROP CONSTRAINT "FK_0cdc4586914e8cef8a1e9513d18"
        `);
    await queryRunner.query(`
            DROP INDEX "public"."IDX_83e3c86705953dd7eb8547578c"
        `);
    await queryRunner.query(`
            DROP INDEX "public"."IDX_2313dd172fab3ec049442eeff0"
        `);
    await queryRunner.query(`
            DROP TABLE "categories_closure_closure"
        `);
    await queryRunner.query(`
            DROP INDEX "public"."IDX_faaf3cda25e4437e2f6d12a579"
        `);
    await queryRunner.query(`
            DROP INDEX "public"."IDX_f2a6dc0b735efe054aec2c81ae"
        `);
    await queryRunner.query(`
            DROP TABLE "categories_has_tickets"
        `);
    await queryRunner.query(`
            DROP TABLE "message"
        `);
    await queryRunner.query(`
            DROP TABLE "tickets"
        `);
    await queryRunner.query(`
            DROP TABLE "groups"
        `);
    await queryRunner.query(`
            DROP TABLE "categories"
        `);
    await queryRunner.query(`
            DROP TABLE "products"
        `);
    await queryRunner.query(`
            DROP TABLE "annotations"
        `);
    await queryRunner.query(`
            DROP TABLE "users"
        `);
    await queryRunner.query(`
            DROP TABLE "priorities"
        `);
  }
}
