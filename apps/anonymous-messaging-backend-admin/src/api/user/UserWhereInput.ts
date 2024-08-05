import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { UserInterestListRelationFilter } from "../userInterest/UserInterestListRelationFilter";

export type UserWhereInput = {
  bio?: StringNullableFilter;
  id?: StringFilter;
  notifications?: NotificationListRelationFilter;
  studentEmail?: StringNullableFilter;
  userInterests?: UserInterestListRelationFilter;
  username?: StringFilter;
};
