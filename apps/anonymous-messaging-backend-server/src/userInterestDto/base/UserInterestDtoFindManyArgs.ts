/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserInterestDtoWhereInput } from "./UserInterestDtoWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserInterestDtoOrderByInput } from "./UserInterestDtoOrderByInput";

@ArgsType()
class UserInterestDtoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserInterestDtoWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserInterestDtoWhereInput, { nullable: true })
  @Type(() => UserInterestDtoWhereInput)
  where?: UserInterestDtoWhereInput;

  @ApiProperty({
    required: false,
    type: [UserInterestDtoOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserInterestDtoOrderByInput], { nullable: true })
  @Type(() => UserInterestDtoOrderByInput)
  orderBy?: Array<UserInterestDtoOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UserInterestDtoFindManyArgs as UserInterestDtoFindManyArgs };
