import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MedicamentosModule } from './medicamentos/medicamentos.module';
import { LembretesModule } from './lembretes/lembretes.module';
import { HistoricosModule } from './historicos/historicos.module';
import { Usuario } from './usuarios/usuario.entity';
import { Medicamento } from './medicamentos/medicamento.entity';
import { Lembrete } from './lembretes/lembrete.entity';
import { Historico } from './historicos/historico.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'gestaoMedicamentosDB',
    entities: [Usuario,Medicamento,Lembrete,Historico],
    synchronize: true,
  }), UsuariosModule, MedicamentosModule, LembretesModule, HistoricosModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
