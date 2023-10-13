import { Controller } from '@nestjs/common';
import { AuthorService } from './author.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateAuthorDto } from './dto/create-author.dto';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @MessagePattern({ cmd: 'create-author' })
  create(createAuthorDto: CreateAuthorDto) {
    console.log(createAuthorDto);

    return this.authorService.create(createAuthorDto);
  }

  @MessagePattern({ cmd: 'all-author' })
  findAll() {
    return this.authorService.findAll();
  }

  @MessagePattern({ cmd: 'find-author' })
  findOne(id: string) {
    return this.authorService.findOne(id);
  }

  @MessagePattern({ cmd: 'update-author' })
  update(updateAuthorDto) {
    const { id, body } = updateAuthorDto;

    return this.authorService.update(id, body);
  }

  @MessagePattern({ cmd: 'delete-author' })
  remove(id: string) {
    return this.authorService.remove(id);
  }
}
