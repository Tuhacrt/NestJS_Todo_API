import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
<<<<<<< HEAD
=======
  ValidationPipe,
  Query,
  ParseIntPipe,
  NotFoundException,
>>>>>>> c98a55e (rebase commit)
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
<<<<<<< HEAD
  create(@Body() createTodoDto: CreateTodoDto) {
=======
  create(@Body(new ValidationPipe()) createTodoDto: CreateTodoDto) {
>>>>>>> c98a55e (rebase commit)
    return this.todosService.create(createTodoDto);
  }

  @Get()
<<<<<<< HEAD
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.remove(+id);
=======
  findAll(@Query('title') title?: string) {
    return this.todosService.findAll(title);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.todosService.findOne(id);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.todosService.remove(id);
>>>>>>> c98a55e (rebase commit)
  }
}
