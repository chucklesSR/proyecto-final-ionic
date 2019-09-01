import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-docente',
  templateUrl: 'docente.html',
})
export class DocentePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http:HttpClient,
    public zone: NgZone,
    ) {
      this.id_Docente = navParams.get("id_Docente");
  }

  id_Docente:any ='';
  datos:any =[];

  ionViewDidLoad() {
    console.log("id_docente:"+this.id_Docente);
    var url="http://192.168.43.187:80/proyectoIonic/CursosxDocente.php";
    this.http.post(url,JSON.stringify(this.id_Docente))
    .subscribe(data=>{
      this.datos = JSON.parse(JSON.stringify(data['Result']));
    });
  }

  detail(datos){
    console.log("Docente: "+datos);
    this.navCtrl.push("MateriasDocentePage",{datos, id_Docente: this.id_Docente});
  }

}
