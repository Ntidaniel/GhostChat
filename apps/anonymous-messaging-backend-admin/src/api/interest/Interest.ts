import { UserInterest } from "../userInterest/UserInterest";

export type Interest = {
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  userInterests?: Array<UserInterest>;
};
