import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MateriasEstudiantePage } from './materias-estudiante';

@NgModule({
  declarations: [
    MateriasEstudiantePage,
  ],
  imports: [
    IonicPageModule.forChild(MateriasEstudiantePage),
  ],
})
export class MateriasEstudiantePageModule {}
