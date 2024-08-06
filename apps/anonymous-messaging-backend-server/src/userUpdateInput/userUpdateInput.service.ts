import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserUpdateInputServiceBase } from "./base/userUpdateInput.service.base";

@Injectable()
export class UserUpdateInputService extends UserUpdateInputServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
