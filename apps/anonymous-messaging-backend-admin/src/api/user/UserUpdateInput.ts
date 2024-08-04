import { InputJsonValue } from "../../types";
import { UserInterestUpdateManyWithoutUsersInput } from "./UserInterestUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  password?: string;
  roles?: InputJsonValue;
  studentEmail?: string | null;
  userInterests?: UserInterestUpdateManyWithoutUsersInput;
  username?: string;
};
