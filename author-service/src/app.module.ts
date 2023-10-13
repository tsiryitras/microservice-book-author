import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import conf from './config.constant';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [AuthorModule, MongooseModule.forRoot(conf().mongoConf)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
