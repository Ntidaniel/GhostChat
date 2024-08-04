import { Interest } from "../interest/Interest";
import { User } from "../user/User";

export type UserInterest = {
  createdAt: Date;
  id: string;
  interest?: Interest | null;
  updatedAt: Date;
  user?: User | null;
};
