import { CreateTodoDto } from './dto/create-todo.dto';
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  readonly logger = new Logger(TodosService.name);
  constructor(private readonly prismaService: PrismaService) {}

  async create(createTodoDto: CreateTodoDto) {
    try {
      const createdTodo = await this.prismaService.todo.create({
        data: createTodoDto,
      });
      // TODO .........
      return createdTodo;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async findAll() {
    try {
      return await this.prismaService.todo.findMany();
    } catch (error) {
      this.logger.error(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.todo.findUnique({
        where: { id },
      });
    } catch (error) {
      this.logger.error(error);
    }
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    try {
      return await this.prismaService.todo.update({
        where: { id },
        data: updateTodoDto,
      });
    } catch (error) {
      this.logger.error(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.todo.delete({
        where: { id },
      });
    } catch (error) {
      console.log({ error });
      //this.logger.error(error);
    }
  }

  hello() {
    return 'Hello';
  }
}
