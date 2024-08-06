import { MessageDto as TMessageDto } from "../api/messageDto/MessageDto";

export const MESSAGEDTO_TITLE_FIELD = "id";

export const MessageDtoTitle = (record: TMessageDto): string => {
  return record.id?.toString() || String(record.id);
};
