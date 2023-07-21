import { Todo } from '@prisma/client';

export class TodoDto implements Todo {
  id: number;
  title: string;
  complete: boolean;
  createdAt: Date;
  updatedAt: Date;
}
