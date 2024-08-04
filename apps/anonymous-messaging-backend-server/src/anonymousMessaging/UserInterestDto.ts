import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
@ObjectType("UserInterestDtoObject")
class UserInterestDto {
    @Field(() => [String])
    @ApiProperty({
        required: true,
        type: () => [String]
    })
    @Type(() => String)
    interests!: string;
}

export { UserInterestDto as UserInterestDto };