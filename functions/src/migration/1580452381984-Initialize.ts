import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1580452381984 implements MigrationInterface {
    name = 'Initialize1580452381984'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `color_entity` (`id` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `color_entity`", undefined);
    }

}
