import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNovedadesPage } from './add-novedades';

@NgModule({
  declarations: [
    AddNovedadesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNovedadesPage),
  ],
})
export class AddNovedadesPageModule {}
