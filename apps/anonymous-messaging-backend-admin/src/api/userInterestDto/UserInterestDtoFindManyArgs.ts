import { UserInterestDtoWhereInput } from "./UserInterestDtoWhereInput";
import { UserInterestDtoOrderByInput } from "./UserInterestDtoOrderByInput";

export type UserInterestDtoFindManyArgs = {
  where?: UserInterestDtoWhereInput;
  orderBy?: Array<UserInterestDtoOrderByInput>;
  skip?: number;
  take?: number;
};
