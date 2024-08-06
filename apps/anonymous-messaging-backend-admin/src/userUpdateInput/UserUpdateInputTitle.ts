import { UserUpdateInput as TUserUpdateInput } from "../api/userUpdateInput/UserUpdateInput";

export const USERUPDATEINPUT_TITLE_FIELD = "id";

export const UserUpdateInputTitle = (record: TUserUpdateInput): string => {
  return record.id?.toString() || String(record.id);
};
