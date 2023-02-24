import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AiService } from './ai.service';
import { GetAiProductDescriptionDto } from './dto/ai.dto';

@ApiTags('OpenAI')
@Controller('ai')
export class AiController {
  constructor(private aiService: AiService) {}

  @ApiOperation({ summary: 'Get generated product descriptions by ChatGPT' })
  @ApiBody({
    type: GetAiProductDescriptionDto,
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
  @ApiCreatedResponse({
    type: String,
  })
  async getProductDescription(
    @Body('currentProductDescription') currentProductDescription: string,
  ): Promise<string> {
    return this.aiService.getProductDescription(currentProductDescription);
  }
}
