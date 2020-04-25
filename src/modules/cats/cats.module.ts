import { Module } from '@nestjs/common';
import { CatsController } from '@src/modules/cats/cats.controller';
import { CatsService } from '@src/modules/cats/cats.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cat } from '@src/modules/cats/models/cat.model';
import { DatabaseModule } from '@src/modules/database/database.module';

@Module({
  imports: [DatabaseModule, SequelizeModule.forFeature([Cat])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
