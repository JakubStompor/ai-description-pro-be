# Project Title

A brief description of what this project does and who it's for

## Description

This is the API which is connecting to Shopify API and OpenAI API. And it's exposing endpoints to generate auto descriptions for Your products in shop.

## Installation

```bash
Create two environment files in root of repository.

.env.stage.dev
.env.stage.prod

Fill up Your API keys.

OPEN_AI_SECRET_KEY=
OPEN_AI_ORGANIZATION_ID=
SHOPIFY_APP_API_KEY=
SHOPIFY_API_URL=
PORT=3000

$ npm install
```

## Running the app

```bash
# development
$ npm run start:dev

# production mode
$ npm run start:prod
```
