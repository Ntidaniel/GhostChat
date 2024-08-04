import { UserInterestCreateNestedManyWithoutInterestsInput } from "./UserInterestCreateNestedManyWithoutInterestsInput";

export type InterestCreateInput = {
  name?: string | null;
  userInterests?: UserInterestCreateNestedManyWithoutInterestsInput;
};
