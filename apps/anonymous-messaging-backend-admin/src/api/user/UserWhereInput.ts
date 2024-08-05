import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { UserInterestListRelationFilter } from "../userInterest/UserInterestListRelationFilter";

export type UserWhereInput = {
  ageRange?: JsonFilter;
  bio?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  lastActive?: DateTimeNullableFilter;
  locationRadius?: IntNullableFilter;
  notifications?: NotificationListRelationFilter;
  studentEmail?: StringNullableFilter;
  userInterests?: UserInterestListRelationFilter;
  username?: StringFilter;
};
