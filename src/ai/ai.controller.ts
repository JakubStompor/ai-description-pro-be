import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AiService } from './ai.service';

@ApiTags('OpenAI')
@Controller('ai')
export class AiController {
  constructor(private aiService: AiService) {}

  @ApiOperation({ summary: 'Get generated product descriptions by ChatGPT' })
  @ApiBody({
    schema: {
      properties: {
        currentProductDescription: {
          description: 'Existing product description or keywords',
          type: 'string',
        },
      },
    },
  })
  @Post('/productDescription')
  async getProductDescription(
    @Body('currentProductDescription') currentProductDescription: string,
  ): Promise<string> {
    return this.aiService.getProductDescription(currentProductDescription);
  }
}
