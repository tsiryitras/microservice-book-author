import { Module } from '@nestjs/common';
import { AuthorService } from './author-service.service';
import { AuthorServiceController } from './author-service.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTHOR_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'author_service_queue',
        },
      },
    ]),
  ],
  controllers: [AuthorServiceController],
  providers: [AuthorService],
})
export class AuthorServiceModule {}
