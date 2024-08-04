import { InputJsonValue } from "../../types";
import { UserInterestUpdateManyWithoutUsersInput } from "./UserInterestUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  bio?: string | null;
  password?: string;
  roles?: InputJsonValue;
  studentEmail?: string | null;
  userInterests?: UserInterestUpdateManyWithoutUsersInput;
  username?: string;
};
