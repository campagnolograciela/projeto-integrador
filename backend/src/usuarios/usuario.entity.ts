import { Medicamento } from 'src/medicamentos/medicamento.entity';
import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @OneToMany(type => Medicamento, medicamento => medicamento.usuario)
  medicamentos: Medicamento[];
}