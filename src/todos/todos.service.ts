import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  private todos = [
    {
      id: 0,
      title: 'todoA',
      category: 'important',
      content: 'stars',
      completed: true,
    },
    {
      id: 1,
      title: 'todoB',
      category: 'work',
      content: 'stick',
      completed: false,
    },
  ];

  createNewTodo(createTodoDto: CreateTodoDto) {
    const { title, category, content, completed } = createTodoDto;

    if (!title) {
      throw new BadRequestException('The title field is required.');
    }

    const newTodo = {
      id: Date.now(),
      title,
      category,
      content,
      completed: completed || false,
    };

    this.todos.push(newTodo);

    return newTodo;
  }

  findAllTodos() {
    return this.todos;
  }

  findAllTodosByTitle(title: string) {
    return this.todos.filter((todo) => todo.title === title);
  }

  findAllTodosByCategory(category: string) {
    return this.todos.filter((todo) => todo.category === category);
  }

  findTodoById(id: number) {
    const todo = this.todos.find((currTodo) => currTodo.id === id);
    if (!todo) {
      throw new Error('todo not found');
    }

    return todo;
  }

  updateTodoById(id: number, updateTodoDto: UpdateTodoDto) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...updateTodoDto };
      }
      return todo;
    });

    return this.findTodoById(id);
  }

  removeAllTodos() {
    this.todos.length = 0;

    return this.todos;
  }

  removeTodoById(id: number) {
    const toBeRemoved = this.findTodoById(id);
    this.todos = this.todos.filter((todo) => todo.id !== id);

    return toBeRemoved;
  }
}
