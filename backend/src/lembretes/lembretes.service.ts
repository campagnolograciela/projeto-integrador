import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lembrete } from './lembrete.entity';


@Injectable()
export class LembretesService {

    constructor(
        @InjectRepository(Lembrete)
        private lembretesRepository: Repository<Lembrete>,
    ) {}
    
    findAll(): Promise<Lembrete[]> {
        return this.lembretesRepository.find();
    }
    
    findOne(id: number): Promise<Lembrete | null> {
        return this.lembretesRepository.findOneBy({ id });
    }  

    async save(Lembrete: Lembrete): Promise<Lembrete> {
        return this.lembretesRepository.save(Lembrete);
    }

    async update(id: number, updateData: Partial<Lembrete>): Promise<Lembrete> {
        await this.lembretesRepository.update(id, updateData);
        return this.findOne(id);
    }

    
    async remove(id: number): Promise<void> {
        await this.lembretesRepository.delete(id);
    }


}