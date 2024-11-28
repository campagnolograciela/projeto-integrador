import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Historico } from './historico.entity';


@Injectable()
export class HistoricosService {

    constructor(
        @InjectRepository(Historico)
        private historicosRepository: Repository<Historico>,
    ) {}
    
    findAll(): Promise<Historico[]> {
        return this.historicosRepository.find();
    }
    
    findOne(id: number): Promise<Historico | null> {
        return this.historicosRepository.findOneBy({ id });
    }  

    async save(Historico: Historico): Promise<Historico> {
        return this.historicosRepository.save(Historico);
    }

    async update(id: number, updateData: Partial<Historico>): Promise<Historico> {
        await this.historicosRepository.update(id, updateData);
        return this.findOne(id);
    }

    
    async remove(id: number): Promise<void> {
        await this.historicosRepository.delete(id);
    }


}