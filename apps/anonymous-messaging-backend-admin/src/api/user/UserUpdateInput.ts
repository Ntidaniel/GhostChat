import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserInterestUpdateManyWithoutUsersInput } from "./UserInterestUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  bio?: string | null;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  studentEmail?: string | null;
  userInterests?: UserInterestUpdateManyWithoutUsersInput;
  username?: string;
};
