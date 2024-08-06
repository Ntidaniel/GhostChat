import { NotificationCreateInputWhereInput } from "./NotificationCreateInputWhereInput";
import { NotificationCreateInputOrderByInput } from "./NotificationCreateInputOrderByInput";

export type NotificationCreateInputFindManyArgs = {
  where?: NotificationCreateInputWhereInput;
  orderBy?: Array<NotificationCreateInputOrderByInput>;
  skip?: number;
  take?: number;
};
