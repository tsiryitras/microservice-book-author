import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import conf from './config.constant';
/**
 *  configuration du options services qu rabbitmq
 */
const microserviceOptions: MicroserviceOptions = {
  transport: Transport.RMQ,
  options: {
    urls: [`${conf().rabbitmq}`],
    queue: 'book_service_queue',
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  await app.listen();
}
bootstrap();
