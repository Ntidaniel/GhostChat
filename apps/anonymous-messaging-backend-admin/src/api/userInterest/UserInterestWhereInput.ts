import { StringFilter } from "../../util/StringFilter";
import { InterestWhereUniqueInput } from "../interest/InterestWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserInterestWhereInput = {
  id?: StringFilter;
  interest?: InterestWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
