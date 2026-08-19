import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';

@ApiTags('todos')
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new todo item' })
  @ApiCreatedResponse({ description: 'Todo item created successfully', type: Todo })
  create(@Body() createTodoDto: CreateTodoDto): Todo {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all todo items' })
  @ApiOkResponse({ description: 'List of all todo items', type: [Todo] })
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a todo item by ID' })
  @ApiParam({ name: 'id', description: 'Todo item ID', example: '1' })
  @ApiOkResponse({ description: 'Todo item details', type: Todo })
  @ApiNotFoundResponse({ description: 'Todo item not found' })
  findOne(@Param('id') id: string): Todo {
    return this.todoService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a todo item by ID' })
  @ApiParam({ name: 'id', description: 'Todo item ID', example: '1' })
  @ApiOkResponse({ description: 'Updated todo item', type: Todo })
  @ApiNotFoundResponse({ description: 'Todo item not found' })
  update(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Todo {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a todo item by ID' })
  @ApiParam({ name: 'id', description: 'Todo item ID', example: '1' })
  @ApiOkResponse({ description: 'Todo item deleted successfully' })
  @ApiNotFoundResponse({ description: 'Todo item not found' })
  remove(@Param('id') id: string): { message: string } {
    return this.todoService.remove(id);
  }
}
