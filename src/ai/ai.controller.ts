import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AiService } from './ai.service';

@ApiTags('ai')
@Controller('ai')
export class AiController {
  constructor(private aiService: AiService) {}

  @ApiOperation({ summary: 'Get generated product descriptions by ChatGPT' })
  @Post('/productDescription')
  async getProductDescription(
    @Body('currentProductDescription') currentProductDescription,
  ): Promise<string> {
    return this.aiService.getProductDescription(currentProductDescription);
  }
}
