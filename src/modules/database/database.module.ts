import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'demo-nestjs',
      password: '123mudar',
      database: 'demo-nestjs',
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
