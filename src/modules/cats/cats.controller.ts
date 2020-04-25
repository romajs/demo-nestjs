import { Cat } from '@src/modules/cats/entities/cat.entity';
import { CatsService } from '@src/modules/cats/cats.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CreateCatDto } from '@src/modules/cats/dto/cats.dto';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto): void {
    this.catsService.create(createCatDto);
  }

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Cat> {
    return this.catsService.findById(id)
  }

  @Delete(':id')
  destroy(@Param('id') id: number, @Res() res: Response): void {
    this.catsService.destroy(id).then((hasDeleted: boolean) => {
      console.log({ hasDeleted });
      res
        .status(hasDeleted ? HttpStatus.NO_CONTENT : HttpStatus.BAD_REQUEST)
        .end();
    });
  }
}
