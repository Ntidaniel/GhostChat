import { InputJsonValue } from "../../types";
import { UserInterestCreateNestedManyWithoutUsersInput } from "./UserInterestCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  bio?: string | null;
  password: string;
  roles: InputJsonValue;
  studentEmail?: string | null;
  userInterests?: UserInterestCreateNestedManyWithoutUsersInput;
  username: string;
};
