import { Cat } from '@src/modules/cats/models/cat.model';
import { CreateCatDto } from './dto/cats.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as R from 'ramda';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat) private catModel: typeof Cat) {}

  create(createCatDto: CreateCatDto): Promise<Cat> {
    return this.catModel.create(createCatDto);
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.findAll<Cat>();
  }

  findById(id: number): Promise<Cat> {
    return this.catModel.findOne({ where: { id }})
  }

  destroy(id: number): Promise<boolean> {
    return this.catModel.destroy({ where: { id } }).then(R.gt(R.__, 0));
  }
}
