import { Controller, Post, Body } from "@nestjs/common";
import { ColorDto } from "alias-test-interface";
import { projectColorDto } from "./projectColor.dto";

@Controller()
export class ColorController {
  @Post("Use DTO in package")
  public returnPackageDto(@Body() colorDto: ColorDto) {
    return colorDto;
  }

  @Post("Use Dto in project")
  public returnProjectDto(@Body() projectDto: projectColorDto) {
    return projectColorDto;
  }
}
