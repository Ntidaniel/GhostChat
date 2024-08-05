import { JsonValue } from "type-fest";
import { Notification } from "../notification/Notification";
import { UserInterest } from "../userInterest/UserInterest";

export type User = {
  ageRange: JsonValue;
  bio: string | null;
  createdAt: Date;
  id: string;
  isActive: boolean | null;
  lastActive: Date | null;
  locationRadius: number | null;
  notifications?: Array<Notification>;
  roles: JsonValue;
  studentEmail: string | null;
  updatedAt: Date;
  userInterests?: Array<UserInterest>;
  username: string;
};
