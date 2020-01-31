import { Controller, Post, Body } from "@nestjs/common";
import { ColorDto } from "./color.dto";

@Controller()
export class ColorController {
  @Post()
  public createColor(@Body() colorDto: ColorDto) {
    return colorDto;
  }
}
