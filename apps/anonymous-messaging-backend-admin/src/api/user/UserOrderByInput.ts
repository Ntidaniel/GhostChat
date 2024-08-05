import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  ageRange?: SortOrder;
  bio?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  lastActive?: SortOrder;
  locationRadius?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  studentEmail?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
