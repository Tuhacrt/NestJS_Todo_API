<<<<<<< HEAD
export class CreateTodoDto {}
=======
import { MinLength } from 'class-validator';

export class CreateTodoDto {
  @MinLength(2)
  title: string;

  // @IsEnum(['stars', 'stick'], { message: 'use correct weapon!' })
  content: string;
}
>>>>>>> c98a55e (rebase commit)
