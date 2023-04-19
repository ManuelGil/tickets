import { MigrationInterface, QueryRunner } from "typeorm";

export class lenghtUserPhoneChanged1681935714776 implements MigrationInterface {
    name = 'lenghtUserPhoneChanged1681935714776'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "users" DROP COLUMN "phone"
        `);
        await queryRunner.query(`
            ALTER TABLE "users"
            ADD "phone" character varying(30)
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "users" DROP COLUMN "phone"
        `);
        await queryRunner.query(`
            ALTER TABLE "users"
            ADD "phone" character varying(20)
        `);
    }

}
