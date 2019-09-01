import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocentePage } from './docente';

@NgModule({
  declarations: [
    DocentePage,
  ],
  imports: [
    IonicPageModule.forChild(DocentePage),
  ],
})
export class DocentePageModule {}
