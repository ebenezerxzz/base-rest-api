import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class NewMigrationDataUsers1740412782614 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'datausers',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'username',
                    type: 'varchar',
                    length: '20',
                    isNullable: false
                },
                {
                    name: 'pass',
                    type: 'varchar',
                    length: '12',
                    isNullable: false
                },
                {
                    name: 'email',
                    type: 'varchar',
                    length: '50',
                    isNullable: false,
                },
                {
                    name: 'phone',
                    type: 'varchar',
                    length: '20',
                    isNullable: false
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('datausers')
    }

}
