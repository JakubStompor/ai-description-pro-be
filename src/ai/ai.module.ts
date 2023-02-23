import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';
import { OpenAiService } from './openai/openai.service';

@Module({
  imports: [ConfigModule],
  controllers: [AiController],
  providers: [AiService, OpenAiService],
})
export class AiModule {}
