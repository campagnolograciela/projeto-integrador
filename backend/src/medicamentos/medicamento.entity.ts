import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Lembrete } from '../lembretes/lembrete.entity';
import { Usuario } from 'src/usuarios/usuario.entity';

@Entity()
export class Medicamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  unidadeMedida: string;

  @Column()
  dosagem: number;

  @ManyToOne(type => Usuario, usuario => usuario.id)
  usuario: Usuario;

  @OneToMany(type => Lembrete, lembrete => lembrete.id)
  lembretes: Lembrete[];
}