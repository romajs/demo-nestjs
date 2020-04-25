import { Injectable, Inject } from '@nestjs/common';
import { Cat } from './entities/cat.entity';
import { CATS_REPOSITORY } from '@src/contants';
import * as R from 'ramda';
import { CreateCatDto } from './dto/cats.dto';

@Injectable()
export class CatsService {
  constructor(@Inject(CATS_REPOSITORY) private catsRepository: typeof Cat) {}

  create(createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsRepository.create(createCatDto);
  }

  async findAll(): Promise<Cat[]> {
    return this.catsRepository.findAll<Cat>();
  }

  findById(id: number): Promise<Cat> {
    return this.catsRepository.findOne({ where: { id }})
  }

  destroy(id: number): Promise<boolean> {
    return this.catsRepository.destroy({ where: { id } }).then(R.gt(R.__, 0));
  }
}
