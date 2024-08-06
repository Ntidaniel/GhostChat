import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "../userUpdateInput/UserUpdateInput";

export type UpdateUserArgs = {
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
};
