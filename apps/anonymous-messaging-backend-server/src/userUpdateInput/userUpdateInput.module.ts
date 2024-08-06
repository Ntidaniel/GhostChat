import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserUpdateInputModuleBase } from "./base/userUpdateInput.module.base";
import { UserUpdateInputService } from "./userUpdateInput.service";
import { UserUpdateInputController } from "./userUpdateInput.controller";
import { UserUpdateInputResolver } from "./userUpdateInput.resolver";

@Module({
  imports: [UserUpdateInputModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserUpdateInputController],
  providers: [UserUpdateInputService, UserUpdateInputResolver],
  exports: [UserUpdateInputService],
})
export class UserUpdateInputModule {}
