import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  message?: string | null;
  readStatus?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
