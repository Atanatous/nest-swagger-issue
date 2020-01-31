import { Controller, Post, Body } from "@nestjs/common";
import { ColorDto } from "./color.dto";
import { ExternalDto } from "@app/interfaces/dto/external.dto";

@Controller()
export class ColorController {
  @Post("Use Dto in project")
  public returnProjectDto(@Body() projectDto: ColorDto) {
    return projectDto;
  }

  @Post("Extenral Dto")
  public returnExternalDto(@Body() externalDto: ExternalDto) {
    return externalDto;
  }
}
