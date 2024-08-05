import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  message?: string | null;
  readStatus?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
