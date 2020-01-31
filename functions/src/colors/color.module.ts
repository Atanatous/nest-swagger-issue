import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ColorController } from "./color.controller";
import { ColorEntity } from "./color.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ColorEntity])],
  controllers: [ColorController]
})
export class ColorModule {}
