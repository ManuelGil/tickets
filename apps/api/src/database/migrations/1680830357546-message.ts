import { MigrationInterface, QueryRunner } from "typeorm";

export class message1680830357546 implements MigrationInterface {
    name = 'message1680830357546'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "message" DROP CONSTRAINT "FK_0b780eaa7d705c91500fc22bf8c"
        `);
        await queryRunner.query(`
            ALTER TABLE "message"
                RENAME COLUMN "ticketId" TO "ticket_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "message"
            ADD CONSTRAINT "FK_c7cbda9a7b72ee211da997772d4" FOREIGN KEY ("ticket_id") REFERENCES "tickets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "message" DROP CONSTRAINT "FK_c7cbda9a7b72ee211da997772d4"
        `);
        await queryRunner.query(`
            ALTER TABLE "message"
                RENAME COLUMN "ticket_id" TO "ticketId"
        `);
        await queryRunner.query(`
            ALTER TABLE "message"
            ADD CONSTRAINT "FK_0b780eaa7d705c91500fc22bf8c" FOREIGN KEY ("ticketId") REFERENCES "tickets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

}
