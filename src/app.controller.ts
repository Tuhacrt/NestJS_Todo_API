<<<<<<< HEAD
import { Controller, Get } from '@nestjs/common';
=======
import { Controller } from '@nestjs/common';
>>>>>>> c98a55e (rebase commit)
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
<<<<<<< HEAD

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
=======
>>>>>>> c98a55e (rebase commit)
}
