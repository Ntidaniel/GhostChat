import { JsonValue } from "type-fest";
import { UserInterest } from "../userInterest/UserInterest";

export type User = {
  createdAt: Date;
  id: string;
  roles: JsonValue;
  studentEmail: string | null;
  updatedAt: Date;
  userInterests?: Array<UserInterest>;
  username: string;
};
