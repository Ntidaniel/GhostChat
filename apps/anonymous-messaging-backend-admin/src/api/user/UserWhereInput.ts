import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserInterestListRelationFilter } from "../userInterest/UserInterestListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  studentEmail?: StringNullableFilter;
  userInterests?: UserInterestListRelationFilter;
  username?: StringFilter;
};
