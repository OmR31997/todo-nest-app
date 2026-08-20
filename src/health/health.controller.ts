import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HealthResponseDto } from './dto/health-response.dto';

@ApiTags('health')
@Controller('health')
export class HealthController {
  @Get()
  @ApiOperation({ summary: 'Check application health' })
  @ApiOkResponse({
    description: 'Application is healthy',
    type: HealthResponseDto,
  })
  check(): HealthResponseDto {
    return {
      status: 'Good',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}
