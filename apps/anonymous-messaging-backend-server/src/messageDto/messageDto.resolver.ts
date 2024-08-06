import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MessageDtoResolverBase } from "./base/messageDto.resolver.base";
import { MessageDto } from "../anonymousMessaging/MessageDto";
import { MessageDtoService } from "./messageDto.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MessageDto)
export class MessageDtoResolver extends MessageDtoResolverBase {
  constructor(
    protected readonly service: MessageDtoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
