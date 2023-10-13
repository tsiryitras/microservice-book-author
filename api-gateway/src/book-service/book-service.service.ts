import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';
import { UpdateBookDto } from './dto/updateBook.dto';

@Injectable()
export class BookService {
  constructor(
    @Inject('BOOK_SERVICE') private readonly clientBookService: ClientProxy,
  ) {}

  allBook() {
    const pattern = { cmd: 'all-book' };
    const payload = {};
    return this.clientBookService
      .send<string>(pattern, payload)
      .pipe(map((data) => ({ data })));
  }

  createBook(payload) {
    const pattern = { cmd: 'create-book' };
    return this.clientBookService
      .send<string>(pattern, payload)
      .pipe(map((data) => ({ data })));
  }

  findBook(payload) {
    const pattern = { cmd: 'find-book' };
    console.log(payload);

    return this.clientBookService
      .send<string>(pattern, payload)
      .pipe(map((data: string) => ({ data })));
  }

  updateBook(payload: UpdateBookDto) {
    const pattern = { cmd: 'update-book' };

    return this.clientBookService
      .send<string>(pattern, payload)
      .pipe(map((data: string) => ({ data })));
  }

  deleteBook(payload) {
    const pattern = { cmd: 'delete-book' };

    return this.clientBookService
      .send<string>(pattern, payload)
      .pipe(map((isDeleted: string) => ({ isDeleted })));
  }
}
