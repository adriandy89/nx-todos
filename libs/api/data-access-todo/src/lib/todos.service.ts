import { PrismaService } from '@cowtrol/api-shared/prisma';
import {
  CreateTodoDto,
  TodoDto,
  UpdateTodoDto,
} from '@cowtrol/api/data-access-dto';
import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class TodosService {
  readonly logger = new Logger(TodosService.name);
  constructor(private readonly prismaService: PrismaService) {}

  async create(createTodoDto: CreateTodoDto): Promise<TodoDto> {
    try {
      const createdTodo = await this.prismaService.todo.create({
        data: createTodoDto,
      });
      // TODO .........
      return createdTodo;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException();
    }
  }

  async findAll(): Promise<TodoDto[]> {
    try {
      return await this.prismaService.todo.findMany();
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: number): Promise<TodoDto> {
    try {
      const todo = await this.prismaService.todo.findUnique({
        where: { id },
      });
      if (!todo) {
        throw new NotFoundException();
      }
      return todo;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException();
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
