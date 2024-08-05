import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserInterestUpdateManyWithoutUsersInput } from "./UserInterestUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  bio?: string | null;
  isActive?: boolean | null;
  lastActive?: Date | null;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  studentEmail?: string | null;
  userInterests?: UserInterestUpdateManyWithoutUsersInput;
  username?: string;
};
