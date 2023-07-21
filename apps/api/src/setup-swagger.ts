import { INestApplication, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(
  app: INestApplication,
  apiGlobalPrefix: string | null
): void {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Anukys Admins API Gateway')
    .setVersion('v1.0.0-rc.6')
    .addApiKey(
      {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        scheme: 'ApiKey',
        description: 'Place your API key here. ex "ApiKey <your-api-key>"',
      },
      'apiKey'
    )
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig, {});

  let swaggerUiPath = `/${apiGlobalPrefix}/docs`;

  if (apiGlobalPrefix) {
    swaggerUiPath = `/${apiGlobalPrefix}/docs`;
    SwaggerModule.setup(swaggerUiPath, app, swaggerDocument, {
      swaggerOptions: { defaultModelsExpandDepth: -1 },
    });
  } else {
    swaggerUiPath = `/docs`;
    SwaggerModule.setup(swaggerUiPath, app, swaggerDocument);
  }

  Logger.log(
    `Swagger Docs enabled: ${'0.0.0.0'}${swaggerUiPath}`,
    'NestApplication'
  );
}
