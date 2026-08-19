import { ApiProperty } from '@nestjs/swagger';

export class HealthResponseDto {
  @ApiProperty({ example: 'ok', description: 'Status of the application' })
  status: string;

  @ApiProperty({ example: '2026-08-19T23:30:00.000Z', description: 'Current ISO timestamp' })
  timestamp: string;

  @ApiProperty({ example: 123.45, description: 'Application uptime in seconds' })
  uptime: number;
}
