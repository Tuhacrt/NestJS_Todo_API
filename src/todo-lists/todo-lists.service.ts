import { Injectable } from '@nestjs/common';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';

@Injectable()
export class TodoListsService {
  private todoLists = [
    { id: 0, title: 'todoA', content: 'stars' },
    { id: 1, title: 'todoB', content: 'burgers' },
  ];

  getTodoLists(content?: 'stars' | 'burgers') {
    if (content) {
      return this.todoLists.filter((todolist) => todolist.content === content);
    }
    return this.todoLists;
  }

  getTodoList(id: number) {
    const todoList = this.todoLists.find((todoList) => todoList.id === id);

    if (!todoList) {
      throw new Error('todo not found');
    }

    return todoList;
  }

  createTodoList(createTodoListDto: CreateTodoListDto) {
    const newTodoList = {
      ...createTodoListDto,
      id: Date.now(),
    };

    this.todoLists.push(newTodoList);

    return newTodoList;
  }

  updateTodoList(id: number, updateTodoListDto: UpdateTodoListDto) {
    this.todoLists = this.todoLists.map((todoList) => {
      if (todoList.id === id) {
        return { ...todoList, ...updateTodoListDto };
      }

      return todoList;
    });

    return this.getTodoList(id);
  }

  removeTodoList(id: number) {
    const toBeRemoved = this.getTodoList(id);

    this.todoLists = this.todoLists.filter((todoList) => todoList.id !== id);

    return toBeRemoved;
  }
}
