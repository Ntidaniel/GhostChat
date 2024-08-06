import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NotificationCreateInputServiceBase } from "./base/notificationCreateInput.service.base";

@Injectable()
export class NotificationCreateInputService extends NotificationCreateInputServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
