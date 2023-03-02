import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { TodoListsModule } from './todo-lists/todo-lists.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TodoListsModule, TodosModule],
=======
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TodosModule],
>>>>>>> c98a55e (rebase commit)
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
