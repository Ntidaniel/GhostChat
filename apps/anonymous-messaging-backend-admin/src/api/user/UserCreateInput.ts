import { InputJsonValue } from "../../types";
import { UserInterestCreateNestedManyWithoutUsersInput } from "./UserInterestCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userInterests?: UserInterestCreateNestedManyWithoutUsersInput;
  username: string;
};
