import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from './config.constant';

@Module({
  imports: [BookModule, MongooseModule.forRoot(configuration().mongoConf)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
