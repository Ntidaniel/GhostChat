import { NotificationCreateInput as TNotificationCreateInput } from "../api/notificationCreateInput/NotificationCreateInput";

export const NOTIFICATIONCREATEINPUT_TITLE_FIELD = "id";

export const NotificationCreateInputTitle = (
  record: TNotificationCreateInput
): string => {
  return record.id?.toString() || String(record.id);
};
