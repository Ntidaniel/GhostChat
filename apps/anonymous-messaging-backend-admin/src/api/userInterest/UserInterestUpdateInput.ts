import { InterestWhereUniqueInput } from "../interest/InterestWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserInterestUpdateInput = {
  interest?: InterestWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
