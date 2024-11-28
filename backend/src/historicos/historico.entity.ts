import { Lembrete } from 'src/lembretes/lembrete.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Historico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column()
  data: string;

  @ManyToOne(type => Lembrete, lembrete => lembrete.id)
  lembrete: Lembrete;
}