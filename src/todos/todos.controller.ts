import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  Query,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

interface FindAllTodosQueryParams {
  title?: string;
  category?: string;
}

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  createTodo(@Body(new ValidationPipe()) createTodoDto: CreateTodoDto) {
    return this.todosService.createNewTodo(createTodoDto);
  }

  @Get()
  getTodos(@Query() query: FindAllTodosQueryParams) {
    const { title, category } = query;
    if (title) {
      return this.todosService.findAllTodosByTitle(title);
    }
    if (category) {
      return this.todosService.findAllTodosByCategory(category);
    }
    return this.todosService.findAllTodos();
  }

  @Get(':id')
  getTodoById(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.todosService.findTodoById(id);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Patch(':id')
  updateTodoById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todosService.updateTodoById(id, updateTodoDto);
  }

  @Delete()
  removeAllTodos() {
    return this.todosService.removeAllTodos();
  }

  @Delete(':id')
  removeTodoById(@Param('id', ParseIntPipe) id: number) {
    return this.todosService.removeTodoById(id);
  }
}
