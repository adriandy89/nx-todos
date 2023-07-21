import { Prisma } from "@prisma/client";
import { IsBoolean, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateTodoDto implements Prisma.TodoCreateInput {
  @IsString()
  @MaxLength(50)
  readonly title: string;

  @IsBoolean()
  @IsOptional()
  readonly complete?: boolean;
}
