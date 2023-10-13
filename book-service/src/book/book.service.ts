import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './entities/book.entity';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(createBookDto: CreateBookDto) {
    return await this.bookModel.create(createBookDto);
  }

  async findAll() {
    return await this.bookModel.find();
  }

  async findOne(id: string) {
    const book = await this.bookModel.findById(id);
    if (!book) {
      return null;
    }
    return book;
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    const book = await this.bookModel.findByIdAndUpdate(id, updateBookDto);
    if (!book) {
      return null;
    }
    const newBook = await this.bookModel.findById(id);
    return newBook;
  }

  async remove(id: string) {
    const book = await this.bookModel.findByIdAndDelete(id);
    if (!book) {
      return false;
    }
    return true;
  }
}
