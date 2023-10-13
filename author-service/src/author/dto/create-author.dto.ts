import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAuthorDto {
  @IsOptional()
  readonly _id: string;
  @IsNotEmpty()
  readonly firstName: string;

  @IsNotEmpty()
  readonly lastName: string;
}
