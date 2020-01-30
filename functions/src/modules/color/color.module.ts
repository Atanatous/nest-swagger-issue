import { Module } from "@nestjs/common";
import { ColorController } from "./color.controller";

@Module({
  imports: [],
  controllers: [ColorController]
})
export class ColorModule {}
