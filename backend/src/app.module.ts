import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanController } from 'src/controller/plan.controller';
import { PlanService } from './service/plan.service';

import { MySqlConfigModule } from './config/database/config.module';
import { MySqlConfigService } from './config/database/config.service';
import { PlnEntity } from './entities/plan.entity';
import { ConfigModule } from '@nestjs/config';
import { FileController } from './controller/file.controller';
import { FileService } from './service/file.service';
import { FileEntity } from './entities/file.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [MySqlConfigModule],
      useClass: MySqlConfigService,
      inject: [MySqlConfigService],
    }),
    TypeOrmModule.forFeature([PlnEntity, FileEntity]),
  ],
  controllers: [PlanController, FileController],
  providers: [PlanService, FileService],
})
export class AppModule {}
