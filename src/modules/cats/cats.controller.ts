import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Cat } from '@src/modules/cats/models/cat.model';
import { CatsService } from '@src/modules/cats/cats.service';
import { CreateCatDto } from '@src/modules/cats/dto/cats.dto';
import { JwtAuthGuard } from '@src/modules/authentication/guards/jwt-auth.guard';
import { Response } from '@src/types';
import { Roles } from '@src/modules/authorization/roles.decorator';
import { RolesGuard } from '@src/modules/authorization/roles.guard';

@Controller('cats')
@UseGuards(JwtAuthGuard, RolesGuard)
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
  async destroyById(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<void> {
    const hasDeleted: boolean = await this.catsService.destroyById(id);
    res
      .code(hasDeleted ? HttpStatus.NO_CONTENT : HttpStatus.BAD_REQUEST)
      .send();
  }
}
