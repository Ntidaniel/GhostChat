/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  User as PrismaUser,
  Notification as PrismaNotification,
  UserInterest as PrismaUserInterest,
} from "@prisma/client";

import { PasswordService } from "../../auth/password.service";
import { transformStringFieldUpdateInput } from "../../prisma.util";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { User } from "./User";
import { UserUpdateInput } from "../../userUpdateInput/base/UserUpdateInput";

export class UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {}

  async count(args: Omit<Prisma.UserCountArgs, "select">): Promise<number> {
    return this.prisma.user.count(args);
  }

  async users(args: Prisma.UserFindManyArgs): Promise<PrismaUser[]> {
    return this.prisma.user.findMany(args);
  }
  async user(args: Prisma.UserFindUniqueArgs): Promise<PrismaUser | null> {
    return this.prisma.user.findUnique(args);
  }
  async createUser(args: Prisma.UserCreateArgs): Promise<PrismaUser> {
    return this.prisma.user.create({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
  }
  async updateUser(args: Prisma.UserUpdateArgs): Promise<PrismaUser> {
    return this.prisma.user.update({
      ...args,

      data: {
        ...args.data,

        password:
          args.data.password &&
          (await transformStringFieldUpdateInput(
            args.data.password,
            (password) => this.passwordService.hash(password)
          )),
      },
    });
  }
  async deleteUser(args: Prisma.UserDeleteArgs): Promise<PrismaUser> {
    return this.prisma.user.delete(args);
  }

  async findNotifications(
    parentId: string,
    args: Prisma.NotificationFindManyArgs
  ): Promise<PrismaNotification[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .notifications(args);
  }

  async findUserInterests(
    parentId: string,
    args: Prisma.UserInterestFindManyArgs
  ): Promise<PrismaUserInterest[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .userInterests(args);
  }
  async FetchUsersBasedOnFilters(args: UserWhereUniqueInput): Promise<User[]> {
    throw new Error("Not implemented");
  }
  async GetUserStatus(args: UserWhereUniqueInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async UpdateUserFilters(args: UserUpdateInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async UpdateUserStatus(args: UserUpdateInput): Promise<User> {
    throw new Error("Not implemented");
  }
}
