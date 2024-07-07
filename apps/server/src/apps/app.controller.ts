import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("main")
@Controller({
  path: "main",
})
export class MainController {
  @Get("/")
  allJobs() {
    return "asd";
  }
}
