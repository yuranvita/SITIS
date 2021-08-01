import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class attractions1617907444701 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name : 'attractions',
            columns : [
                {
                    name : 'id',
                    type : 'uuid',
                    isPrimary: true,
                },
                {
                    name : 'user_id',
                    type : 'uuid'
                },
                {
                    name : 'name',
                    type : 'varchar'
                },
                {
                    name : 'latitude',
                    type : 'decimal'
                },
                {
                    name : 'longitude',
                    type : 'decimal'
                },
                {
                    name : 'about',
                    type : 'varchar'
                },
                {
                    name : 'instruction',
                    type : 'varchar'
                },
                {
                    name : 'opening_hours',
                    type : 'varchar'
                },
                {
                    name : 'open_on_weekends',
                    type : 'boolean'
                },
                {
                    name : 'whatsapp',
                    type : 'integer'
                },
                {
                    name : 'municipality_id',
                    type : 'integer'
                },
                {
                    name : 'created_at',
                    type : "timestamp",
                    default : "now()"
                },
                {
                    name : 'updated_at',
                    type : 'timestamp',
                    default : 'now()'
                }
            ],
                foreignKeys : [
                    {
                        name : 'attractionMunicipality',
                        columnNames :['municipality_id'],
                        referencedTableName : 'municipality',
                        referencedColumnNames :['id'],
                        onUpdate : 'CASCADE',
                        onDelete : 'CASCADE'
                        
                    },
                    {
                        name : 'attractionUser',
                        columnNames :['user_id'],
                        referencedTableName : 'users',
                        referencedColumnNames : ['id'],
                        onUpdate : 'CASCADE',
                        onDelete : 'CASCADE'

                    }
                ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('attractions')
    }

}
