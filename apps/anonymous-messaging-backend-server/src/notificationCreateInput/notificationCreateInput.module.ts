import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NotificationCreateInputModuleBase } from "./base/notificationCreateInput.module.base";
import { NotificationCreateInputService } from "./notificationCreateInput.service";
import { NotificationCreateInputController } from "./notificationCreateInput.controller";
import { NotificationCreateInputResolver } from "./notificationCreateInput.resolver";

@Module({
  imports: [NotificationCreateInputModuleBase, forwardRef(() => AuthModule)],
  controllers: [NotificationCreateInputController],
  providers: [NotificationCreateInputService, NotificationCreateInputResolver],
  exports: [NotificationCreateInputService],
})
export class NotificationCreateInputModule {}
