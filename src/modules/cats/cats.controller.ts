import { Cat } from '@src/modules/cats/models/cat.model';
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
  async create(@Body() createCatDto: CreateCatDto): Promise<void> {
    const cat = await this.catsService.create(createCatDto);
  }

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Cat> {
    return this.catsService.findById(id);
  }

  @Delete(':id')
  async destroy(@Param('id') id: number, @Res() res: Response): Promise<void> {
    const hasDeleted: boolean = await this.catsService.destroy(id);
    res
      .status(hasDeleted ? HttpStatus.NO_CONTENT : HttpStatus.BAD_REQUEST)
      .end();
  }
}
