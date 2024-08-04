import * as graphql from "@nestjs/graphql";
import { MessageDto } from "../anonymousMessaging/MessageDto";
import { UserInterestDto } from "../anonymousMessaging/UserInterestDto";
import { AnonymousMessagingService } from "./anonymousmessaging.service";

export class AnonymousMessagingResolver {
  constructor(protected readonly service: AnonymousMessagingService) {}

  @graphql.Mutation(() => MessageDto)
  async CreateMessage(
    @graphql.Args()
    args: MessageDto
  ): Promise<MessageDto> {
    return this.service.CreateMessage(args);
  }

  @graphql.Query(() => [MessageDto])
  async FetchMessages(
    @graphql.Args("args")
    args: string
  ): Promise<MessageDto[]> {
    return this.service.FetchMessages(args);
  }

  @graphql.Query(() => [UserInterestDto])
  async FetchUsersWithSimilarInterests(
    @graphql.Args()
    args: UserInterestDto
  ): Promise<UserInterestDto[]> {
    return this.service.FetchUsersWithSimilarInterests(args);
  }
}
