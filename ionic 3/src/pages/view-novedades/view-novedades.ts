import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-view-novedades',
  templateUrl: 'view-novedades.html',
})
export class ViewNovedadesPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http:HttpClient,
    ) {
      this.id_Materias=navParams.get('id_Materia');
  }

  id_Materias:any='';
  datos:any =[];

  ionViewDidLoad() {
    console.log("id_Materias:"+this.id_Materias);
    var url="http://192.168.43.187:80/proyectoIonic/NovedadesxCurso_Docente.php";
    this.http.post(url,JSON.stringify(this.id_Materias))
    .subscribe(data=>{
      this.datos = JSON.parse(JSON.stringify(data['Result']));
    });
  }

}
