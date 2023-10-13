import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class Author extends Document {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: false })
  lastName: string;
}
export type AuthorDocument = HydratedDocument<Author>;

export const AuthorSchema = SchemaFactory.createForClass(Author);
