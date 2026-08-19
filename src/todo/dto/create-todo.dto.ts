import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty({ example: 'Buy groceries', description: 'Title of the todo task' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({ example: 'Milk, Eggs, Bread', description: 'Detailed description of the task' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ example: false, description: 'Whether task is completed', default: false })
  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
