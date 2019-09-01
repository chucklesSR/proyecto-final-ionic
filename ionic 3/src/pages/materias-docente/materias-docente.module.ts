import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MateriasDocentePage } from './materias-docente';

@NgModule({
  declarations: [
    MateriasDocentePage,
  ],
  imports: [
    IonicPageModule.forChild(MateriasDocentePage),
  ],
})
export class MateriasDocentePageModule {}
