import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface Response {
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Response {
    return this.appService.getHello();
  }
}
