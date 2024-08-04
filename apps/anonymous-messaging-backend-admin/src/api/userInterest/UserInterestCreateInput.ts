import { InterestWhereUniqueInput } from "../interest/InterestWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserInterestCreateInput = {
  interest?: InterestWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
