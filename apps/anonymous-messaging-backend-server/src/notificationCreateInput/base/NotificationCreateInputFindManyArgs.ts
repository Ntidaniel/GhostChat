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
import { NotificationCreateInputWhereInput } from "./NotificationCreateInputWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { NotificationCreateInputOrderByInput } from "./NotificationCreateInputOrderByInput";

@ArgsType()
class NotificationCreateInputFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => NotificationCreateInputWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => NotificationCreateInputWhereInput, { nullable: true })
  @Type(() => NotificationCreateInputWhereInput)
  where?: NotificationCreateInputWhereInput;

  @ApiProperty({
    required: false,
    type: [NotificationCreateInputOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [NotificationCreateInputOrderByInput], { nullable: true })
  @Type(() => NotificationCreateInputOrderByInput)
  orderBy?: Array<NotificationCreateInputOrderByInput>;

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

export { NotificationCreateInputFindManyArgs as NotificationCreateInputFindManyArgs };