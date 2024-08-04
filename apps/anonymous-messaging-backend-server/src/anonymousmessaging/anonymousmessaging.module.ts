import { Module } from "@nestjs/common";
import { AnonymousMessagingService } from "./anonymousmessaging.service";
import { AnonymousMessagingController } from "./anonymousmessaging.controller";
import { AnonymousMessagingResolver } from "./anonymousmessaging.resolver";

@Module({
  controllers: [AnonymousMessagingController],
  providers: [AnonymousMessagingService, AnonymousMessagingResolver],
  exports: [AnonymousMessagingService],
})
export class AnonymousMessagingModule {}
