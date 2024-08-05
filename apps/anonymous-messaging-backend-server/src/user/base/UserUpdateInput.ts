/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "../../validators";

import {
  IsOptional,
  IsString,
  MaxLength,
  IsBoolean,
  IsDate,
  IsInt,
  Min,
  Max,
  ValidateNested,
} from "class-validator";

import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { Type } from "class-transformer";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { UserInterestUpdateManyWithoutUsersInput } from "./UserInterestUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  ageRange?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bio?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  lastActive?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  locationRadius?: number | null;

  @ApiProperty({
    required: false,
    type: () => NotificationUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => NotificationUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => NotificationUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  notifications?: NotificationUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  studentEmail?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserInterestUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserInterestUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserInterestUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  userInterests?: UserInterestUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}

export { UserUpdateInput as UserUpdateInput };
