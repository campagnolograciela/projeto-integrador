import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medicamento } from './medicamento.entity';


@Injectable()
export class MedicamentosService {

    constructor(
        @InjectRepository(Medicamento)
        private medicamentosRepository: Repository<Medicamento>,
    ) {}
    
    findAll(): Promise<Medicamento[]> {
        return this.medicamentosRepository.find();
    }
    
    findOne(id: number): Promise<Medicamento | null> {
        return this.medicamentosRepository.findOneBy({ id });
    }  

    async save(Medicamento: Medicamento): Promise<Medicamento> {
        return this.medicamentosRepository.save(Medicamento);
    }

    async update(id: number, updateData: Partial<Medicamento>): Promise<Medicamento> {
        await this.medicamentosRepository.update(id, updateData);
        return this.findOne(id);
    }

    
    async remove(id: number): Promise<void> {
        await this.medicamentosRepository.delete(id);
    }


}