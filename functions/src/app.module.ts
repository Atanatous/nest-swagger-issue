import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ColorModule } from "./colors/color.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [ColorModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
