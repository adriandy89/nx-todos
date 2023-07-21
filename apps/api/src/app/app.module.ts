import { Module } from '@nestjs/common';
import { ApiSharedPrismaModule } from '@cowtrol/api-shared/prisma';
import { ApiFeatureTodoModule } from '@cowtrol/api/feature-todo';

@Module({
  imports: [ApiSharedPrismaModule, ApiFeatureTodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
