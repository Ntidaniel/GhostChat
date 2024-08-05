import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { UserInterestListRelationFilter } from "../userInterest/UserInterestListRelationFilter";

export type UserWhereInput = {
  bio?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  lastActive?: DateTimeNullableFilter;
  notifications?: NotificationListRelationFilter;
  studentEmail?: StringNullableFilter;
  userInterests?: UserInterestListRelationFilter;
  username?: StringFilter;
};
