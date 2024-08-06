import { UserInterestDto as TUserInterestDto } from "../api/userInterestDto/UserInterestDto";

export const USERINTERESTDTO_TITLE_FIELD = "id";

export const UserInterestDtoTitle = (record: TUserInterestDto): string => {
  return record.id?.toString() || String(record.id);
};
