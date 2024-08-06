import { SortOrder } from "../../util/SortOrder";

export type MessageDtoOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
