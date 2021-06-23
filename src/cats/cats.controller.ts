import { Controller, Get, Post, Headers, Param, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get(':id')
  getCat(@Param('id') id, @Headers('domain') name): Promise<Cat> {
    return this.catsService.getById(id, name);
  }

  @Post()
  saveCat(@Body() cat: Cat, @Headers('domain') name): Promise<Cat> {
    return this.catsService.saveCat(cat, name);
  }
}
