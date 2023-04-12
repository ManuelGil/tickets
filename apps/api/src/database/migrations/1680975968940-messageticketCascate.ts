import { MigrationInterface, QueryRunner } from "typeorm";

export class messageticketCascate1680975968940 implements MigrationInterface {
    name = 'messageticketCascate1680975968940'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "users" (
                "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "username" character varying(100) NOT NULL,
                "password" character varying(255) NOT NULL,
                "first_name" character varying(100),
                "last_name" character varying(100),
                "email" character varying(320) NOT NULL,
                "phone" character varying(25),
                "roles" text NOT NULL DEFAULT '["guest"]',
                "is_activated" boolean NOT NULL DEFAULT true,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"),
                CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"),
                CONSTRAINT "PK_951b8f1dfc94ac1d0301a14b7e1" PRIMARY KEY ("uuid")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "message" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "user" character varying,
                "data" character varying,
                "message_id" uuid,
                CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "tickets" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "title" character varying,
                "description" character varying,
                "status" character varying,
                "techSupport" character varying,
                "user" character varying,
                "creationDate" character varying,
                CONSTRAINT "PK_343bc942ae261cf7a1377f48fd0" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "message"
            ADD CONSTRAINT "FK_06a563cdbd963a9f7cbcb25c447" FOREIGN KEY ("message_id") REFERENCES "tickets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "message" DROP CONSTRAINT "FK_06a563cdbd963a9f7cbcb25c447"
        `);
        await queryRunner.query(`
            DROP TABLE "tickets"
        `);
        await queryRunner.query(`
            DROP TABLE "message"
        `);
        await queryRunner.query(`
            DROP TABLE "users"
        `);
    }

}
