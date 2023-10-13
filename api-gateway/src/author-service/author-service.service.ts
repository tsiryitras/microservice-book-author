import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';
import { UpdateAuthorDto } from './dto/updateAuthor.dto';

@Injectable()
export class AuthorService {
  constructor(
    @Inject('AUTHOR_SERVICE') private readonly clientAuthorService: ClientProxy,
  ) {}

  allAuthor() {
    const pattern = { cmd: 'all-author' };
    return this.clientAuthorService
      .send<string>(pattern, {})
      .pipe(map((data: string) => ({ data })));
  }

  createAuthor(payload) {
    const pattern = { cmd: 'create-author' };
    return this.clientAuthorService
      .send<string>(pattern, payload)
      .pipe(map((data: string) => ({ data })));
  }

  findAuthor(payload) {
    const pattern = { cmd: 'find-author' };
    console.log(payload);

    return this.clientAuthorService
      .send<string>(pattern, payload)
      .pipe(map((data: string) => ({ data })));
  }

  updateAuthor(payload: UpdateAuthorDto) {
    const pattern = { cmd: 'update-author' };

    return this.clientAuthorService
      .send<string>(pattern, payload)
      .pipe(map((data: string) => ({ data })));
  }

  deleteAuthor(payload) {
    const pattern = { cmd: 'delete-author' };

    return this.clientAuthorService
      .send<string>(pattern, payload)
      .pipe(map((isDeleted: string) => ({ isDeleted })));
  }
}
