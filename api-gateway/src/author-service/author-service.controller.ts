import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AuthorService } from './author-service.service';
import { UpdateAuthorDto } from './dto/updateAuthor.dto';

@Controller('author')
export class AuthorServiceController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  allAuthor() {
    return this.authorService.allAuthor();
  }

  @Post()
  createAuthor(@Body() body) {
    return this.authorService.createAuthor(body);
  }

  @Get(':id')
  findAuthor(@Param('id') id: string) {
    return this.authorService.findAuthor(id);
  }

  @Patch(':id')
  updateAuthor(@Param('id') id: string, @Body() body) {
    const updateData: UpdateAuthorDto = { id, body };

    return this.authorService.updateAuthor(updateData);
  }

  @Delete(':id')
  deleteAuthor(@Param('id') id: string) {
    return this.authorService.deleteAuthor(id);
  }
}
