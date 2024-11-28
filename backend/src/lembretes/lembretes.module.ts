import { Module } from '@nestjs/common';
import { Lembrete } from './lembrete.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LembretesService } from './lembretes.service';
import { LembretesController } from './lembretes.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Lembrete])],
    providers: [LembretesService],
    controllers: [LembretesController]
})
export class LembretesModule {}
