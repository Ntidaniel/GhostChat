import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserInterestListRelationFilter } from "../userInterest/UserInterestListRelationFilter";

export type UserWhereInput = {
  bio?: StringNullableFilter;
  id?: StringFilter;
  studentEmail?: StringNullableFilter;
  userInterests?: UserInterestListRelationFilter;
  username?: StringFilter;
};
