import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateTodoDto {
  @ApiPropertyOptional({ example: 'Buy groceries and fruits', description: 'Updated title of the task' })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiPropertyOptional({ example: 'Milk, Eggs, Bread, Apples', description: 'Updated description' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ example: true, description: 'Updated completion status' })
  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
