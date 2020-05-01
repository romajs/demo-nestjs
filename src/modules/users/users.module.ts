import { DatabaseModule } from '@src/modules/database/database.module';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '@src/modules/users/models/user.model';
import { UsersService } from '@src/modules/users/users.service';

@Module({
  exports: [UsersService],
  imports: [DatabaseModule, SequelizeModule.forFeature([User])],
  providers: [UsersService],
})
export class UsersModule {}
