import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class Book extends Document {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: false })
  description: string;

  @Prop({ type: Number, required: true })
  page: number;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, required:true})
  author: string;
}

export type BookDocument = HydratedDocument<Book>;

export const BookSchema = SchemaFactory.createForClass(Book);
