import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/admin")
  getAdmin(): string {
    return this.appService.getAdmin();
  }

  @Get("/index")
  @Render("index")
  root() {
    return {};
  }
}
