import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserInterestDtoServiceBase } from "./base/userInterestDto.service.base";

@Injectable()
export class UserInterestDtoService extends UserInterestDtoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
