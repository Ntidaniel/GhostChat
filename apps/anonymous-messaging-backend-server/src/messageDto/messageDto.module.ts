import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MessageDtoModuleBase } from "./base/messageDto.module.base";
import { MessageDtoService } from "./messageDto.service";
import { MessageDtoController } from "./messageDto.controller";
import { MessageDtoResolver } from "./messageDto.resolver";

@Module({
  imports: [MessageDtoModuleBase, forwardRef(() => AuthModule)],
  controllers: [MessageDtoController],
  providers: [MessageDtoService, MessageDtoResolver],
  exports: [MessageDtoService],
})
export class MessageDtoModule {}
