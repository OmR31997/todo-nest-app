import { ApiProperty } from '@nestjs/swagger';

export class Todo {
  @ApiProperty({ example: '1', description: 'Unique identifier of the todo' })
  id: string;

  @ApiProperty({ example: 'Buy groceries', description: 'Title of the todo task' })
  title: string;

  @ApiProperty({ example: 'Milk, Eggs, Bread', description: 'Detailed description of the todo task', required: false })
  description?: string;

  @ApiProperty({ example: false, description: 'Completion status of the todo task' })
  completed: boolean;

  @ApiProperty({ example: '2026-08-19T23:30:00.000Z', description: 'Creation date' })
  createdAt: Date;

  @ApiProperty({ example: '2026-08-19T23:30:00.000Z', description: 'Last update date' })
  updatedAt: Date;
}
