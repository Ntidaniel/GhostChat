import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MessageDtoServiceBase } from "./base/messageDto.service.base";

@Injectable()
export class MessageDtoService extends MessageDtoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
