import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserUpdateInputResolverBase } from "./base/userUpdateInput.resolver.base";
import { UserUpdateInput } from "./base/UserUpdateInput";
import { UserUpdateInputService } from "./userUpdateInput.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserUpdateInput)
export class UserUpdateInputResolver extends UserUpdateInputResolverBase {
  constructor(
    protected readonly service: UserUpdateInputService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
