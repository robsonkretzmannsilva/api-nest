import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
      .setTitle('API Docs')
      .setDescription('API description')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document); // URL: /swagger
    await app.listen(process.env.PORT || 3000, '0.0.0.0'); // Ensure correct port is used
    console.log('Application started successfully');
  } catch (err) {
    console.error('Error during application startup:', err);
  }
}
bootstrap();
