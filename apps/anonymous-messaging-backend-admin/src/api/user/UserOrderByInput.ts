import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  studentEmail?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
