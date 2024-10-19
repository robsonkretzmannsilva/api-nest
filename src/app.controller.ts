import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';


@ApiTags('API')
@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/hello")
  @ApiOperation({ summary: 'Retorna uma mensagem de boas-vindas' })
  @ApiResponse({ status: 200, description: 'Retorna a mensagem' })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  redirectToSwagger(@Res() res: Response) {
    return res.redirect('/swagger');
  }
}
