import { JsonValue } from "type-fest";
import { UserInterest } from "../userInterest/UserInterest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userInterests?: Array<UserInterest>;
  username: string;
};
