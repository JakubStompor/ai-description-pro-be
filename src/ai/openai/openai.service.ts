import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration, OpenAIApi } from 'openai';
import { EnvironmentVariables } from 'src/config/config.model';

@Injectable()
export class OpenAiService {
  private openAiApi: OpenAIApi;

  constructor(private configService: ConfigService<EnvironmentVariables>) {
    this.initGPT();
  }

  get instance(): OpenAIApi {
    return this.openAiApi;
  }

  private initGPT(): void {
    const configuration = new Configuration({
      organization: this.configService.get('OPEN_AI_ORGANIZATION_ID'),
      apiKey: this.configService.get('OPEN_AI_SECRET_KEY'),
    });
    this.openAiApi = new OpenAIApi(configuration);
  }
}
