import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  studentEmail?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
