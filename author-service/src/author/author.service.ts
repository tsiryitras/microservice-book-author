import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from './entities/author.entity';
import { Model } from 'mongoose';

@Injectable()
export class AuthorService {
  constructor(@InjectModel(Author.name) private authorModel: Model<Author>) {}

  async create(createAuthorDto: CreateAuthorDto) {
    return await this.authorModel.create(createAuthorDto);
  }

  async findAll() {
    return await this.authorModel.find();
  }

  async findOne(id: string) {
    const author = await this.authorModel.findById(id);
    if (!author) {
      return null;
    }
    return author;
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto) {
    const author = await this.authorModel.findByIdAndUpdate(
      id,
      updateAuthorDto,
    );
    if (!author) {
      return null;
    }
    const newAuthor = await this.authorModel.findById(id);
    return newAuthor;
  }

  async remove(id: string) {
    const author = await this.authorModel.findByIdAndDelete(id);
    if (!author) {
      return false;
    }
    return true;
  }
}
