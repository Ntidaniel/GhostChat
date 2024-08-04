import { UserInterestUpdateManyWithoutInterestsInput } from "./UserInterestUpdateManyWithoutInterestsInput";

export type InterestUpdateInput = {
  name?: string | null;
  userInterests?: UserInterestUpdateManyWithoutInterestsInput;
};
