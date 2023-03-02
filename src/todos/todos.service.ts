import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  private todos = [
    { id: 0, title: 'todoA', content: 'stars' },
    { id: 1, title: 'todoB', content: 'stick' },
  ];
  create(createTodoDto: CreateTodoDto) {
    const newTodo = {
      ...createTodoDto,
      id: Date.now(),
    };
    this.todos.push(newTodo);

    return newTodo;
  }

  findAll(title?: string) {
    if (title) {
      return this.todos.filter((todo) => todo.title === title);
    }

    return this.todos;
  }

  findOne(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error('todo not found');
    }

    return todo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...updateTodoDto };
      }
      return todo;
    });

    return this.findOne(id);
  }

  remove(id: number) {
    const toBeRemoved = this.findOne(id);
    this.todos = this.todos.filter((todo) => todo.id !== id);

    return toBeRemoved;
  }
}
