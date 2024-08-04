import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AnonymousMessagingService } from "./anonymousmessaging.service";
import { UserInterestDto } from "../anonymousMessaging/UserInterestDto";
import { MessageDto } from "../anonymousMessaging/MessageDto";

@swagger.ApiTags("anonymousMessagings")
@common.Controller("anonymousMessagings")
export class AnonymousMessagingController {
  constructor(protected readonly service: AnonymousMessagingService) {}

  @common.Post("/message")
  @swagger.ApiOkResponse({
    type: MessageDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateMessage(
    @common.Body()
    body: UserInterestDto
  ): Promise<MessageDto> {
        return this.service.CreateMessage(body);
      }

  @common.Get("/messages")
  @swagger.ApiOkResponse({
    type: MessageDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchMessages(
    @common.Body()
    body: UserInterestDto
  ): Promise<MessageDto[]> {
        return this.service.FetchMessages(body);
      }

  @common.Get("/users/similar-interests")
  @swagger.ApiOkResponse({
    type: UserInterestDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchUsersWithSimilarInterests(
    @common.Body()
    body: UserInterestDto
  ): Promise<UserInterestDto[]> {
        return this.service.FetchUsersWithSimilarInterests(body);
      }
}
