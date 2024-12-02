import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LembretePageRoutingModule } from './lembrete-routing.module';

import { LembretePage } from './lembrete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LembretePageRoutingModule
  ],
  declarations: [LembretePage]
})
export class LembretePageModule {}
