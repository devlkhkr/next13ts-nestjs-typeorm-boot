import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PlanController } from "@src/plan/plan.controller";
import { PlanService } from "@src/plan/plan.service";

import { MySqlConfigModule } from "@src/config/database/config.module";
import { MySqlConfigService } from "@src/config/database/config.service";
import { PlnEntity } from "@src/plan/entities/plan.entity";
import { ConfigModule } from "@nestjs/config";
import { FileService } from "@src/s3file/file.service";
import { FileEntity } from "@src/s3file/entities/file.entity";
import { SysDictEntity } from "@src/sys/entities/sysDict.entity";
import { SysService } from "@src/sys/sys.service";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { PlanResolver } from "@src/plan/plan.resolver";
import { SysDictItemEntity } from "./sys/entities/sysDictItem.entity";
import { FileController } from "@src/s3file/file.controller";
import { SysController } from "@src/sys/sys.controller";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [MySqlConfigModule],
      useClass: MySqlConfigService,
      inject: [MySqlConfigService],
    }),
    TypeOrmModule.forFeature([
      PlnEntity,
      FileEntity,
      SysDictEntity,
      SysDictItemEntity,
    ]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
      playground: true,
    }),
  ],
  controllers: [PlanController, FileController, SysController],
  providers: [PlanService, FileService, SysService, PlanResolver],
})
export class AppModule {}
