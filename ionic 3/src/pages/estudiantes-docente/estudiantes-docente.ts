import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-estudiantes-docente',
  templateUrl: 'estudiantes-docente.html',
})
export class EstudiantesDocentePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http:HttpClient,
    public zone: NgZone
    ) {
      this.id_curso=navParams.get("id_curso");
  }

  id_curso:any='';
  datos:any =[];

  ionViewDidLoad() {
    var url="http://192.168.43.187:80/proyectoIonic/EstudiantesxCurso.php";
    this.http.post(url,JSON.stringify(this.id_curso))
    .subscribe(data=>{
      this.datos = JSON.parse(JSON.stringify(data['Result']));
    });
  }

}
