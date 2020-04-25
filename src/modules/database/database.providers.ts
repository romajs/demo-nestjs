import { Sequelize } from 'sequelize-typescript';
import { Cat } from '@src/modules/cats/entities/cat.entity';
import { SEQUELIZE } from '@src/contants';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'demo-nestjs',
        password: '123mudar',
        database: 'demo-nestjs',
      });
      sequelize.addModels([Cat]);
      await sequelize.sync();
      return sequelize;
    },
  },
];