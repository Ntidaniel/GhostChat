import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserInterestDtoService } from "./userInterestDto.service";
import { UserInterestDtoControllerBase } from "./base/userInterestDto.controller.base";

@swagger.ApiTags("userInterestDtos")
@common.Controller("userInterestDtos")
export class UserInterestDtoController extends UserInterestDtoControllerBase {
  constructor(
    protected readonly service: UserInterestDtoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
