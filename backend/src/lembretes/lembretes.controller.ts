import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { LembretesService } from './lembretes.service';
import { Lembrete } from './lembrete.entity';

@Controller('lembretes')
export class LembretesController {
  constructor(private readonly lembretesService: LembretesService) {}

  @Get()
  async findAll(): Promise<Lembrete[]> {
    return this.lembretesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Lembrete | null> {
    return this.lembretesService.findOne(id);
  }

  @Post()
  async create(@Body() Lembrete: Lembrete): Promise<Lembrete> {
    return this.lembretesService.save(Lembrete);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateData: Partial<Lembrete>,
  ): Promise<Lembrete> {
    return this.lembretesService.update(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.lembretesService.remove(id);
  }
}
