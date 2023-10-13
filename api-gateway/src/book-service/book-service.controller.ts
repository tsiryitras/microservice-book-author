import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BookService } from './book-service.service';
import { UpdateBookDto } from './dto/updateBook.dto';

@Controller('book')
export class BookServiceController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  allBook() {
    return this.bookService.allBook();
  }

  @Post()
  createBook(@Body() body) {
    return this.bookService.createBook(body);
  }

  @Get(':id')
  findBook(@Param('id') id: string) {
    return this.bookService.findBook(id);
  }

  @Patch(':id')
  updateBook(@Param('id') id: string, @Body() body) {
    const updateData: UpdateBookDto = { id, body };

    return this.bookService.updateBook(updateData);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    return this.bookService.deleteBook(id);
  }
}
