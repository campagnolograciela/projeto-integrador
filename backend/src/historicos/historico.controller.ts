import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { HistoricosService } from './historico.service';
import { Historico } from './historico.entity';

@Controller('historicos')
export class HistoricosController {
  constructor(private readonly historicosService: HistoricosService) {}

  @Get()
  async findAll(): Promise<Historico[]> {
    return this.historicosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Historico | null> {
    return this.historicosService.findOne(id);
  }

  @Post()
  async create(@Body() Historico: Historico): Promise<Historico> {
    return this.historicosService.save(Historico);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateData: Partial<Historico>,
  ): Promise<Historico> {
    return this.historicosService.update(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.historicosService.remove(id);
  }
}
