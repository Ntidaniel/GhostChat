import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { NotificationCreateInputResolverBase } from "./base/notificationCreateInput.resolver.base";
import { NotificationCreateInput } from "./base/NotificationCreateInput";
import { NotificationCreateInputService } from "./notificationCreateInput.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => NotificationCreateInput)
export class NotificationCreateInputResolver extends NotificationCreateInputResolverBase {
  constructor(
    protected readonly service: NotificationCreateInputService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
