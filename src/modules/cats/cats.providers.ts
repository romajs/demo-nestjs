import { Cat } from '@src/modules/cats/entities/cat.entity';
import { CATS_REPOSITORY } from '@src/contants';

export const catsProviders = [
  {
    provide: CATS_REPOSITORY,
    useValue: Cat,
  },
];
