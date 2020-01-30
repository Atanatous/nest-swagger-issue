import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ColorModule } from "./modules/color/color.module";

@Module({
  imports: [ColorModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
