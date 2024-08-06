/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserInterestDtoService } from "../userInterestDto.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserInterestDtoCreateInput } from "./UserInterestDtoCreateInput";
import { UserInterestDto } from "../../anonymousMessaging/UserInterestDto";
import { UserInterestDtoFindManyArgs } from "./UserInterestDtoFindManyArgs";
import { UserInterestDtoWhereUniqueInput } from "./UserInterestDtoWhereUniqueInput";
import { UserInterestDtoUpdateInput } from "./UserInterestDtoUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserInterestDtoControllerBase {
  constructor(
    protected readonly service: UserInterestDtoService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserInterestDto })
  @nestAccessControl.UseRoles({
    resource: "UserInterestDto",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUserInterestDto(
    @common.Body() data: UserInterestDtoCreateInput
  ): Promise<UserInterestDto> {
    return await this.service.createUserInterestDto({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [UserInterestDto] })
  @ApiNestedQuery(UserInterestDtoFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserInterestDto",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userInterestDtos(
    @common.Req() request: Request
  ): Promise<UserInterestDto[]> {
    const args = plainToClass(UserInterestDtoFindManyArgs, request.query);
    return this.service.userInterestDtos({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserInterestDto })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserInterestDto",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userInterestDto(
    @common.Param() params: UserInterestDtoWhereUniqueInput
  ): Promise<UserInterestDto | null> {
    const result = await this.service.userInterestDto({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserInterestDto })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserInterestDto",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUserInterestDto(
    @common.Param() params: UserInterestDtoWhereUniqueInput,
    @common.Body() data: UserInterestDtoUpdateInput
  ): Promise<UserInterestDto | null> {
    try {
      return await this.service.updateUserInterestDto({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserInterestDto })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserInterestDto",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUserInterestDto(
    @common.Param() params: UserInterestDtoWhereUniqueInput
  ): Promise<UserInterestDto | null> {
    try {
      return await this.service.deleteUserInterestDto({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
