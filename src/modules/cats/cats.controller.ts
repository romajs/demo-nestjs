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
import { Roles } from '@src/modules/authorization/roles.decorator';
import { RolesGuard } from '@src/modules/authorization/roles.guard';
import { Response } from '@src/types';

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
  findOneById(@Param('id') id: number): Promise<Cat> {
    return this.catsService.findOneById(id);
  }

  @Delete(':id')
  async destroyById(@Param('id') id: number, @Res() res: Response): Promise<void> {
    const hasDeleted: boolean = await this.catsService.destroyById(id);
    res.code(hasDeleted ? HttpStatus.NO_CONTENT : HttpStatus.BAD_REQUEST).send()
  }
}
