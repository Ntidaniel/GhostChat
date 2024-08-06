import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserUpdateInputService } from "./userUpdateInput.service";
import { UserUpdateInputControllerBase } from "./base/userUpdateInput.controller.base";

@swagger.ApiTags("userUpdateInputs")
@common.Controller("userUpdateInputs")
export class UserUpdateInputController extends UserUpdateInputControllerBase {
  constructor(
    protected readonly service: UserUpdateInputService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
