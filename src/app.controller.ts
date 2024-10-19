import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';


@ApiTags('API')
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Retorna uma mensagem de boas-vindas' })
  @ApiResponse({ status: 200, description: 'Retorna a mensagem' })
  getHello(): string {
    return this.appService.getHello();
  }
}