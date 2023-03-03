import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @MinLength(3, { message: 'Title must be at least 3 characters long.' })
  @IsNotEmpty({ message: 'Title is required.' })
  readonly title: string;

  @IsString({ message: 'Category must be a string.' })
  @IsNotEmpty({ message: 'Category is required.' })
  @IsOptional()
  readonly category?: string;

  @IsString({ message: 'Content must be a string.' })
  @IsNotEmpty({ message: 'Content is required.' })
  @IsOptional()
  readonly content?: string;

  @IsBoolean()
  readonly completed: boolean = false;
}
