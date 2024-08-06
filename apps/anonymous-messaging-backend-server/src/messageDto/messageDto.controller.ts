import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MessageDtoService } from "./messageDto.service";
import { MessageDtoControllerBase } from "./base/messageDto.controller.base";

@swagger.ApiTags("messageDtos")
@common.Controller("messageDtos")
export class MessageDtoController extends MessageDtoControllerBase {
  constructor(
    protected readonly service: MessageDtoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
