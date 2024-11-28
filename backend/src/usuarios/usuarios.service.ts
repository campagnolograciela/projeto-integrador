import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuariosService {

    constructor(
        @InjectRepository(Usuario)
        private usersRepository: Repository<Usuario>,
    ) {}
    
    findAll(): Promise<Usuario[]> {
        return this.usersRepository.find();
    }
    
    findOne(id: number): Promise<Usuario | null> {
        return this.usersRepository.findOneBy({ id });
    }  

    async save(usuario: Usuario): Promise<Usuario> {
        return this.usersRepository.save(usuario);
    }

    async update(id: number, updateData: Partial<Usuario>): Promise<Usuario> {
        await this.usersRepository.update(id, updateData);
        return this.findOne(id);
    }

    
    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }


}