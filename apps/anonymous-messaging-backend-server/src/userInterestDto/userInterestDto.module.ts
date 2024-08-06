import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserInterestDtoModuleBase } from "./base/userInterestDto.module.base";
import { UserInterestDtoService } from "./userInterestDto.service";
import { UserInterestDtoController } from "./userInterestDto.controller";
import { UserInterestDtoResolver } from "./userInterestDto.resolver";

@Module({
  imports: [UserInterestDtoModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserInterestDtoController],
  providers: [UserInterestDtoService, UserInterestDtoResolver],
  exports: [UserInterestDtoService],
})
export class UserInterestDtoModule {}
