import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {}

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  profile(@Request() req: any) {
    return req.user;
  }
}
