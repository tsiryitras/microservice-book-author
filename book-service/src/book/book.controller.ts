import { Controller } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @MessagePattern({ cmd: 'create-book' })
  create(createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @MessagePattern({ cmd: 'all-book' })
  findAll() {
    return this.bookService.findAll();
  }

  @MessagePattern({ cmd: 'find-book' })
  findOne(id: string) {
    return this.bookService.findOne(id);
  }

  @MessagePattern({ cmd: 'update-book' })
  update(updateBookDto) {
    const { id, body } = updateBookDto;
    return this.bookService.update(id, body);
  }

  @MessagePattern({ cmd: 'delete-book' })
  remove(id: string) {
    return this.bookService.remove(id);
  }
}
