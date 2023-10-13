import { Injectable } from '@nestjs/common';
import configuration from './config.constant';
@Injectable()
export class AppService {
  getHello(): string {
    const mongoConf = configuration().mongoConf;
    console.log(mongoConf);

    return 'Hello World!';
  }
}
