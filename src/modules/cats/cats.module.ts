import { Cat } from '@src/modules/cats/models/cat.model';
import { CatsController } from '@src/modules/cats/cats.controller';
import { CatsService } from '@src/modules/cats/cats.service';
import { DatabaseModule } from '@src/modules/database/database.module';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [DatabaseModule, SequelizeModule.forFeature([Cat])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
