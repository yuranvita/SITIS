import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class images1617907456180 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name : 'images',
            columns : [
                {
                    name : 'id',
                    type : 'uuid',
                    isPrimary : true,
                },
                {
                    name : 'path',
                    type : 'varchar'
                },
                {
                    name : 'attraction_id',
                    type : 'integer'
                }
            ] ,
            foreignKeys : [
                {
                    name : 'imageAttractions',
                    columnNames:['attraction_id'],
                    referencedTableName: 'attractions',
                    referencedColumnNames :['id'],
                    onUpdate : 'CASCADE',
                    onDelete : 'CASCADE'

                }
            ]
            
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
