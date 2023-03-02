import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';

@Module({
  controllers: [TodosController],
<<<<<<< HEAD
  providers: [TodosService]
=======
  providers: [TodosService],
>>>>>>> c98a55e (rebase commit)
})
export class TodosModule {}
