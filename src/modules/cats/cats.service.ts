import * as R from 'ramda';

import { Cat } from '@src/modules/cats/models/cat.model';
import { CreateCatDto } from './dto/cats.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat) private catModel: typeof Cat) {}

  create(createCatDto: CreateCatDto): Promise<Cat> {
    return this.catModel.create(createCatDto);
  }

  findAll(): Promise<Cat[]> {
    return this.catModel.findAll({ where: {} });
  }

  findOneById(id: number): Promise<Cat> {
    return this.catModel.findOne({ where: { id } });
  }

  destroyById(id: number): Promise<boolean> {
    return this.catModel.destroy({ where: { id } }).then(R.gt(R.__, 0));
  }
}
