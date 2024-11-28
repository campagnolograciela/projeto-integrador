import { Module } from '@nestjs/common';
import { Historico } from './historico.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoricosService } from './historico.service';
import { HistoricosController } from './historico.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Historico])],
    providers: [HistoricosService],
    controllers: [HistoricosController]
})
export class HistoricosModule {}
