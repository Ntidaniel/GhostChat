import { Module } from "@nestjs/common";
import { InterestModule } from "./interest/interest.module";
import { UserInterestModule } from "./userInterest/userInterest.module";
import { MessageModule } from "./message/message.module";
import { UserModule } from "./user/user.module";
import { NotificationModule } from "./notification/notification.module";
import { UserUpdateInputModule } from "./userUpdateInput/userUpdateInput.module";
import { NotificationCreateInputModule } from "./notificationCreateInput/notificationCreateInput.module";
import { MessageDtoModule } from "./messageDto/messageDto.module";
import { UserInterestDtoModule } from "./userInterestDto/userInterestDto.module";
import { AnonymousMessagingModule } from "./anonymousmessaging/anonymousmessaging.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    ACLModule,
    AuthModule,
    KafkaModule,
    InterestModule,
    UserInterestModule,
    MessageModule,
    UserModule,
    NotificationModule,
    UserUpdateInputModule,
    NotificationCreateInputModule,
    MessageDtoModule,
    UserInterestDtoModule,
    AnonymousMessagingModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
