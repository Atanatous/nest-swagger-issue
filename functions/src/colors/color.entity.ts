import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class ColorEntity {
  @PrimaryColumn()
  id: number;
}
