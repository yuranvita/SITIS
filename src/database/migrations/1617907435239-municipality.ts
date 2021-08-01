import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class municipality1617907435239 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name : 'municipality',
            columns : [
                {
                    name : 'id',
                    type : 'uuid',
                    isPrimary : true,
                },
                {
                    name : 'name',
                    type : 'varchar',
                },
                {
                    name : 'population',
                    type : 'integer'
                },
                {
                    name : 'climate',
                    type : 'varchar'
                },
                {
                    name : 'temperature',
                    type : 'float'
                },
                {
                    name : 'access',
                    type : 'varchar'
                },
                {
                    name : 'history',
                    type : 'varchar'
                },
                {
                    name : 'region_id',
                    type : 'integer'
                }
            ],
                foreignKeys : [
                    {
                        name : 'municipalityRegion',
                        columnNames :['region_id'],
                        referencedTableName : 'region',
                        referencedColumnNames : ['id'],
                        onUpdate : 'CASCADE',
                        onDelete : 'CASCADE'
                    }
                ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('municipality');
    }

}
