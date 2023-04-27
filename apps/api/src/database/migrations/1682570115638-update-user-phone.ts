import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateUserPhone1682570115638 implements MigrationInterface {
  name = 'UpdateUserPhone1682570115638';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "users" DROP COLUMN "phone"
        `);
    await queryRunner.query(`
            ALTER TABLE "users"
            ADD "phone" character varying(25)
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
