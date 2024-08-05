import { InputJsonValue } from "../../types";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { UserInterestUpdateManyWithoutUsersInput } from "./UserInterestUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  ageRange?: InputJsonValue;
  bio?: string | null;
  isActive?: boolean | null;
  lastActive?: Date | null;
  locationRadius?: number | null;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  studentEmail?: string | null;
  userInterests?: UserInterestUpdateManyWithoutUsersInput;
  username?: string;
};
