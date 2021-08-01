import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class region1617907396289 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name : 'region',
            columns:[
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary : true,
                },
                {
                    name : 'name',
                    type : 'varchar'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('region')
    }

}
