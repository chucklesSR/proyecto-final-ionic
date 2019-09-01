import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstudiantesDocentePage } from './estudiantes-docente';

@NgModule({
  declarations: [
    EstudiantesDocentePage,
  ],
  imports: [
    IonicPageModule.forChild(EstudiantesDocentePage),
  ],
})
export class EstudiantesDocentePageModule {}
