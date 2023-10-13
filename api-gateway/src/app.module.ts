import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookServiceModule } from './book-service/book-service.module';
import { AuthorServiceModule } from './author-service/author-service.module';

@Module({
  imports: [BookServiceModule, AuthorServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
