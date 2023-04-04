import { MigrationInterface, QueryRunner } from 'typeorm';

export class user1680551897642 implements MigrationInterface {
  name = 'user1680551897642';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "users"
                RENAME COLUMN "role" TO "roles"
        `);
    await queryRunner.query(`
            ALTER TYPE "public"."users_role_enum"
            RENAME TO "users_roles_enum"
        `);
    await queryRunner.query(`
            ALTER TABLE "users" DROP COLUMN "roles"
        `);
    await queryRunner.query(`
            ALTER TABLE "users"
            ADD "roles" text NOT NULL DEFAULT '["guest"]'
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "users" DROP COLUMN "roles"
        `);
    await queryRunner.query(`
            ALTER TABLE "users"
            ADD "roles" "public"."users_roles_enum" NOT NULL DEFAULT 'guest'
        `);
    await queryRunner.query(`
            ALTER TYPE "public"."users_roles_enum"
            RENAME TO "users_role_enum"
        `);
    await queryRunner.query(`
            ALTER TABLE "users"
                RENAME COLUMN "roles" TO "role"
        `);
  }
}
