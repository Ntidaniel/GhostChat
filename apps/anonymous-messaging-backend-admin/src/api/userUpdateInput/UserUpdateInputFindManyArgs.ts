import { UserUpdateInputWhereInput } from "./UserUpdateInputWhereInput";
import { UserUpdateInputOrderByInput } from "./UserUpdateInputOrderByInput";

export type UserUpdateInputFindManyArgs = {
  where?: UserUpdateInputWhereInput;
  orderBy?: Array<UserUpdateInputOrderByInput>;
  skip?: number;
  take?: number;
};
