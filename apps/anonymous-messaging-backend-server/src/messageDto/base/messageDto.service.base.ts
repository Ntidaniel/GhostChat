/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MessageDto as PrismaMessageDto } from "@prisma/client";

export class MessageDtoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MessageDtoCountArgs, "select">
  ): Promise<number> {
    return this.prisma.messageDto.count(args);
  }

  async messageDtos(
    args: Prisma.MessageDtoFindManyArgs
  ): Promise<PrismaMessageDto[]> {
    return this.prisma.messageDto.findMany(args);
  }
  async messageDto(
    args: Prisma.MessageDtoFindUniqueArgs
  ): Promise<PrismaMessageDto | null> {
    return this.prisma.messageDto.findUnique(args);
  }
  async createMessageDto(
    args: Prisma.MessageDtoCreateArgs
  ): Promise<PrismaMessageDto> {
    return this.prisma.messageDto.create(args);
  }
  async updateMessageDto(
    args: Prisma.MessageDtoUpdateArgs
  ): Promise<PrismaMessageDto> {
    return this.prisma.messageDto.update(args);
  }
  async deleteMessageDto(
    args: Prisma.MessageDtoDeleteArgs
  ): Promise<PrismaMessageDto> {
    return this.prisma.messageDto.delete(args);
  }
}
