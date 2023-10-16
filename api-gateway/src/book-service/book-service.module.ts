import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BookServiceController } from './book-service.controller';
import { BookService } from './book-service.service';
import conf from '../config.constant';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BOOK_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [`${conf().rabbitmq}`],
          queue: 'book_service_queue',
        },
      },
    ]),
  ],
  controllers: [BookServiceController],
  providers: [BookService],
})
export class BookServiceModule {}
