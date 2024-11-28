import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicamento } from './medicamento.entity';
import { MedicamentosService } from './medicamentos.service';
import { MedicamentosController } from './medicamentos.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Medicamento])],
    providers: [MedicamentosService],
    controllers: [MedicamentosController]
})
export class MedicamentosModule {}
