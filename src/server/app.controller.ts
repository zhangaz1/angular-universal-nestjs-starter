import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/server')
  root(): string {
    return "Angular Universal + NestJS Starter.";
  }
}
