import { Injectable } from '@nestjs/common';
import { CreateCompletionRequest, OpenAIApi } from 'openai';
import { AIModels, AIPersonalities } from './ai.model';
import { OpenAiService } from './openai/openai.service';

@Injectable()
export class AiService {
  private openAIApi: OpenAIApi;
  private defaultAIParams: CreateCompletionRequest = {
    max_tokens: 1000,
    n: 1,
    stop: null,
    temperature: 0.6,
    model: AIModels.DA_VINCI_003,
  };

  constructor(private openAiService: OpenAiService) {
    this.openAIApi = this.openAiService.instance;
  }

  async getProductDescription(
    currentProductDescription: string,
  ): Promise<string> {
    try {
      const productDescription: string =
        currentProductDescription || 'Brak opisu produktu.';
      const response = await this.openAIApi.createCompletion({
        prompt: `${AIPersonalities.seo_product_description} Opis produktu: ${productDescription}`,
        ...this.defaultAIParams,
      });
      return response.data.choices[0].text;
    } catch (error) {
      return error;
    }
  }
}
