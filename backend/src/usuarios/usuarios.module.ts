import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuario.controller';

@Module({ 
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [UsuariosService],
    controllers: [UsuariosController],})
export class UsuariosModule {}
