import { MinLength } from 'class-validator';

export class CreateTodoDto {
  @MinLength(2)
  title: string;

  // @IsEnum(['stars', 'stick'], { message: 'use correct weapon!' })
  content: string;
}
