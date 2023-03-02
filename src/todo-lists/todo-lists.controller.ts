import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { BeltGuard } from 'src/belt/belt.guard';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';
import { TodoListsService } from './todo-lists.service';

// @UseGuards(BeltGuard)
@Controller('todo-lists')
export class TodoListsController {
  constructor(private readonly todoListsService: TodoListsService) {}

  @Get()
  getTodoLists(@Query('content') content: 'stars' | 'burgers') {
    return this.todoListsService.getTodoLists(content);
  }

  @Get(':id')
  getTodoList(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.todoListsService.getTodoList(id);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Post()
  @UseGuards(BeltGuard)
  createTodoList(
    @Body(new ValidationPipe()) createTodoListDto: CreateTodoListDto,
  ) {
    return this.todoListsService.createTodoList(createTodoListDto);
  }

  @Put(':id')
  updateTodoList(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTodoListDto: UpdateTodoListDto,
  ) {
    return this.todoListsService.updateTodoList(id, updateTodoListDto);
  }

  @Delete(':id')
  removeTodoList(@Param('id', ParseIntPipe) id: number) {
    return this.todoListsService.removeTodoList(id);
  }
}
