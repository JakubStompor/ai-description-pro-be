import * as Joi from '@hapi/joi';

export const configValidationSchema = Joi.object({
  STAGE: Joi.string().required(),
  PORT: Joi.number().default(3000).required(),
  OPEN_AI_SECRET_KEY: Joi.string().required(),
  OPEN_AI_ORGANIZATION_ID: Joi.string().required(),
  SHOPIFY_APP_API_KEY: Joi.string().required(),
  SHOPIFY_API_URL: Joi.string().required(),
});
