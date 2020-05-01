import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { User } from '@src/modules/users/models/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private catModel: typeof User) {}

  findAll(): Promise<User[]> {
    return this.catModel.findAll({ where: {} });
  }

  findOneByUsername(username: string): Promise<User> {
    return this.catModel.findOne({ where: { username } });
  }
}
