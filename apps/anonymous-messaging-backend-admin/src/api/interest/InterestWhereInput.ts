import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserInterestListRelationFilter } from "../userInterest/UserInterestListRelationFilter";

export type InterestWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  userInterests?: UserInterestListRelationFilter;
};
