import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserInterestCreateNestedManyWithoutUsersInput } from "./UserInterestCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  bio?: string | null;
  isActive?: boolean | null;
  lastActive?: Date | null;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  studentEmail?: string | null;
  userInterests?: UserInterestCreateNestedManyWithoutUsersInput;
  username: string;
};
