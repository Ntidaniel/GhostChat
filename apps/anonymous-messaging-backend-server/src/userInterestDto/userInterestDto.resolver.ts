import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserInterestDtoResolverBase } from "./base/userInterestDto.resolver.base";
import { UserInterestDto } from "../anonymousMessaging/UserInterestDto";
import { UserInterestDtoService } from "./userInterestDto.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserInterestDto)
export class UserInterestDtoResolver extends UserInterestDtoResolverBase {
  constructor(
    protected readonly service: UserInterestDtoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
