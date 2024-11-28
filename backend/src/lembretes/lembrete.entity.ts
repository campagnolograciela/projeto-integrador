import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Medicamento } from '../medicamentos/medicamento.entity';
import { Historico } from 'src/historicos/historico.entity';

@Entity()
export class Lembrete {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  horario: string;

  @Column()
  mensagem: string;

  @ManyToOne(type => Medicamento, medicamento => medicamento.id)
  medicamento: Medicamento;

  @OneToMany(type => Historico, historico => historico.id)
  historicos: Historico[];

}