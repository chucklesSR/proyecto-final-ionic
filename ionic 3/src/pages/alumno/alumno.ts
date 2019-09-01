import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-alumno',
  templateUrl: 'alumno.html',
})
export class AlumnoPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http:HttpClient,
    public zone: NgZone,
    ) {
      this.id_Alumno = navParams.get("id_Alumno");
  }

  id_Alumno:any ='';
  datos:any =[];

  ionViewDidLoad() {
    console.log("id_docente:"+this.id_Alumno);
    var url="http://192.168.43.187:80/proyectoIonic/CursosxEstudiante.php";
    this.http.post(url,JSON.stringify(this.id_Alumno))
    .subscribe(data=>{
      this.datos = JSON.parse(JSON.stringify(data['Result']));
    });
  }

  detail(datos){
    console.log("Docente: "+datos);
    this.navCtrl.push("MateriasEstudiantePage",{datos,id_Alumno: this.id_Alumno});
  }

  eventos(){
    this.navCtrl.push("EventosPage",{id_Alumno: this.id_Alumno});
  }

}
