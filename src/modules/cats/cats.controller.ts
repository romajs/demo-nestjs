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
  UseGuards,
} from '@nestjs/common';
import { CreateCatDto } from '@src/modules/cats/dto/cats.dto';
import { Response } from 'express';
import { Roles } from '../authorization/roles.decorator';
import { RolesGuard } from '../authorization/roles.guard';

@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @Roles()
  async create(@Body() createCatDto: CreateCatDto): Promise<void> {
    await this.catsService.create(createCatDto);
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
