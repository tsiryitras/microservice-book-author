import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BookServiceController } from './book-service.controller';
import { BookService } from './book-service.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BOOK_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://rabbitmq:5672'],
          queue: 'book_service_queue',
        },
      },
    ]),
  ],
  controllers: [BookServiceController],
  providers: [BookService],
})
export class BookServiceModule {}
