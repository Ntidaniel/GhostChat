import { Injectable } from "@nestjs/common";
import { MessageDto } from "../anonymousMessaging/MessageDto";
import { UserInterestDto } from "../anonymousMessaging/UserInterestDto";

@Injectable()
export class AnonymousMessagingService {
  constructor() {}
  async CreateMessage(args: MessageDto): Promise<MessageDto> {
    throw new Error("Not implemented");
  }
  async FetchMessages(args: string): Promise<MessageDto[]> {
    throw new Error("Not implemented");
  }
  async FetchUsersWithSimilarInterests(args: UserInterestDto): Promise<UserInterestDto[]> {
    throw new Error("Not implemented");
  }
}
