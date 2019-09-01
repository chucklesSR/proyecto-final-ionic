import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-materias-estudiante',
  templateUrl: 'materias-estudiante.html',
})
export class MateriasEstudiantePage {

  datos:any=[];
  id_Alumno:any='';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public zone: NgZone
    ) {
      this.datos=navParams.get("datos");
      this.id_Alumno=navParams.get("id_Alumno");
  }

  ionViewDidLoad() {
    console.log(this.datos);
  }

  addNovedades(){
    this.navCtrl.push("AddNovedadesPage",{id_curso:this.datos.id,id_usuario:this.id_Alumno});
  }

  viewNovedades(){
    this.navCtrl.push("ViewNovedadesAlumnoPage",{id_Materia:this.datos.id});
  }

}
