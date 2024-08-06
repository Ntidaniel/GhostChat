import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NotificationCreateInputService } from "./notificationCreateInput.service";
import { NotificationCreateInputControllerBase } from "./base/notificationCreateInput.controller.base";

@swagger.ApiTags("notificationCreateInputs")
@common.Controller("notificationCreateInputs")
export class NotificationCreateInputController extends NotificationCreateInputControllerBase {
  constructor(
    protected readonly service: NotificationCreateInputService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
