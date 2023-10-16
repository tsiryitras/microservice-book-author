import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { first } from 'rxjs';
import { UpdateBookDto } from './dto/updateBook.dto';
import { GetBookDto } from './dto/getBook.dto';
// import { GetAuthorDto } from './dto/getAuthor.dto';

@Injectable()
export class BookService {
  constructor(
    @Inject('BOOK_SERVICE') private readonly clientBookService: ClientProxy,
  ) {}

  async allBook() {
    const pattern = { cmd: 'all-book' };
    const payload = {};
    const books: GetBookDto[] = await this.clientBookService
      .send(pattern, payload)
      .pipe(first())
      .toPromise();

    return { data: books };
  }

  async createBook(payload) {
    const pattern = { cmd: 'create-book' };
    const book: GetBookDto = await this.clientBookService
      .send(pattern, payload)
      .pipe(first())
      .toPromise();
    return { data: book };
  }

  async findBook(payload) {
    const pattern = { cmd: 'find-book' };
    console.log(payload);

    const book: GetBookDto = await this.clientBookService
      .send(pattern, payload)
      .pipe(first())
      .toPromise();
    return { data: book };
  }

  async updateBook(payload: UpdateBookDto) {
    const pattern = { cmd: 'update-book' };

    const book: GetBookDto = await this.clientBookService
      .send(pattern, payload)
      .pipe(first())
      .toPromise();
    return { data: book };
  }

  async deleteBook(payload) {
    const pattern = { cmd: 'delete-book' };

    const book: GetBookDto = await this.clientBookService
      .send(pattern, payload)
      .pipe(first())
      .toPromise();
    return { deleted: book };
  }
}
