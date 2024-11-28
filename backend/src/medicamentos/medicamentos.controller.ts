import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MedicamentosService } from './medicamentos.service';
import { Medicamento } from './medicamento.entity';

@Controller('medicamentos')
export class MedicamentosController {
  constructor(private readonly medicamentosService: MedicamentosService) {}

  @Get()
  async findAll(): Promise<Medicamento[]> {
    return this.medicamentosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Medicamento | null> {
    return this.medicamentosService.findOne(id);
  }

  @Post()
  async create(@Body() Medicamento: Medicamento): Promise<Medicamento> {
    return this.medicamentosService.save(Medicamento);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateData: Partial<Medicamento>,
  ): Promise<Medicamento> {
    return this.medicamentosService.update(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.medicamentosService.remove(id);
  }
}
