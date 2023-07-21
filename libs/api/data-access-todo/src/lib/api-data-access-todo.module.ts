import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';

@Module({
  controllers: [],
  providers: [TodosService],
  exports: [TodosService],
})
export class ApiDataAccessTodoModule {}
