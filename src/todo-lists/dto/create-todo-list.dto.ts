import { IsEnum, MinLength } from 'class-validator';

export class CreateTodoListDto {
  @MinLength(3)
  title: string;

  @IsEnum(['stars', 'stick'], { message: 'use correct weapon!' })
  content: string;
}
