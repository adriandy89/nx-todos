import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { ApiDataAccessTodoModule } from '@cowtrol/api/data-access-todo';

@Module({
  imports: [ApiDataAccessTodoModule],
  controllers: [TodosController],
  providers: [],
  exports: [],
})
export class ApiFeatureTodoModule {}
