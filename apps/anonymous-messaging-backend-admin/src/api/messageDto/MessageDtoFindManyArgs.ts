import { MessageDtoWhereInput } from "./MessageDtoWhereInput";
import { MessageDtoOrderByInput } from "./MessageDtoOrderByInput";

export type MessageDtoFindManyArgs = {
  where?: MessageDtoWhereInput;
  orderBy?: Array<MessageDtoOrderByInput>;
  skip?: number;
  take?: number;
};
