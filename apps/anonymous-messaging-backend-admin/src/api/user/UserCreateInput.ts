import { InputJsonValue } from "../../types";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { UserInterestCreateNestedManyWithoutUsersInput } from "./UserInterestCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  ageRange?: InputJsonValue;
  bio?: string | null;
  isActive?: boolean | null;
  lastActive?: Date | null;
  locationRadius?: number | null;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  studentEmail?: string | null;
  userInterests?: UserInterestCreateNestedManyWithoutUsersInput;
  username: string;
};
