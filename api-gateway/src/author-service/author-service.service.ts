import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { first } from 'rxjs';
import { UpdateAuthorDto } from './dto/updateAuthor.dto';

@Injectable()
export class AuthorService {
  constructor(
    @Inject('AUTHOR_SERVICE') private readonly clientAuthorService: ClientProxy,
  ) {}

  async allAuthor() {
    const pattern = { cmd: 'all-author' };
    const author = await this.clientAuthorService
      .send(pattern, {})
      .pipe(first())
      .toPromise();
    return { data: author };
  }

  async createAuthor(payload) {
    const pattern = { cmd: 'create-author' };
    const author = await this.clientAuthorService
      .send(pattern, payload)
      .pipe(first())
      .toPromise();
    return { data: author };
  }

  async findAuthor(payload) {
    const pattern = { cmd: 'find-author' };
    console.log(payload);

    const author = await this.clientAuthorService
      .send(pattern, payload)
      .pipe(first())
      .toPromise();

    return { data: author };
  }

  async updateAuthor(payload: UpdateAuthorDto) {
    const pattern = { cmd: 'update-author' };

    const author = await this.clientAuthorService
      .send(pattern, payload)
      .pipe(first())
      .toPromise();
    return { data: author };
  }

  async deleteAuthor(payload) {
    const pattern = { cmd: 'delete-author' };

    const author = await this.clientAuthorService
      .send(pattern, payload)
      .pipe(first())
      .toPromise();
    return { data: author };
  }
}
