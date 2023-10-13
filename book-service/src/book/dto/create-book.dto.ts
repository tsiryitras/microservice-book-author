import { IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';

export class CreateBookDto extends Document {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  readonly page: number;

  @IsNotEmpty()
  readonly price: number;

  @IsNotEmpty()
  readonly author: string;
}
