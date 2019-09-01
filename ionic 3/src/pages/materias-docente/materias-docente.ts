import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-materias-docente',
  templateUrl: 'materias-docente.html',
})
export class MateriasDocentePage {

  datos:any=[];
  id_Docente:any='';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public zone: NgZone
    ) {
      this.datos=navParams.get("datos");
      this.id_Docente=navParams.get("id_Docente");
  }

  ionViewDidLoad() {
    console.log(this.datos+" id_docente"+this.id_Docente);
  }

  estudiantes(){
    console.log("id del curso "+this.datos.id);
    this.navCtrl.push("EstudiantesDocentePage",{id_curso:this.datos.id});
  }

  addNovedades(){
    this.navCtrl.push("AddNovedadesPage",{id_curso:this.datos.id,id_usuario:this.id_Docente});
  }

  viewNovedades(){
    this.navCtrl.push("ViewNovedadesPage",{id_Materia:this.datos.id});
  }

}
