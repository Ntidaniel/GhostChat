import { Notification } from "../notification/Notification";
import { JsonValue } from "type-fest";
import { UserInterest } from "../userInterest/UserInterest";

export type User = {
  bio: string | null;
  createdAt: Date;
  id: string;
  isActive: boolean | null;
  lastActive: Date | null;
  notifications?: Array<Notification>;
  roles: JsonValue;
  studentEmail: string | null;
  updatedAt: Date;
  userInterests?: Array<UserInterest>;
  username: string;
};
