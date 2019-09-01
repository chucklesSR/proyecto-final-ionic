import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  datos:any ={
    txtUserName: '',
    txtPassword: ''
  }
  toast:any='';

  constructor(
    public navCtrl: NavController,
    private http:HttpClient,
    public navParams: NavParams,
    private toastCtrl: ToastController
    ) {
    
  }
  
  login(){
    console.log(JSON.stringify(this.datos));
    if(this.datos.txtUserName==""||
    this.datos.txtPassword==""
    ){
      this.toast=this.toastCtrl.create({
        message: "Llene los datos del formulario",
        position: 'bottom',
        duration: 4000
      });
      this.toast.present();
    }else{
      var url="http://192.168.43.187:80/proyectoIonic/login.php";
      this.http.post(url,JSON.stringify(this.datos))
      .subscribe(data=>{
        console.log(data['Code']);
        if(data['Code']==0){
          this.toast=this.toastCtrl.create({
            message: data['Result'],
            position: 'bottom',
            duration: 4000
          });
          this.toast.present();
        }else{
          console.log(data['Result'][0]['vc_Rol']);
          switch(data['Result'][0]['vc_Rol']){
            case "1":
                this.toast=this.toastCtrl.create({
                  message: "El administrador se logue desde la web.",
                  position: 'bottom',
                  duration: 4000
                });
                this.toast.present();
              break;
            case "2":
                this.navCtrl.push("DocentePage",{id_Docente : data['Result'][0]['id']});
              break;
            case "3":
                this.navCtrl.push("AlumnoPage",{id_Alumno : data['Result'][0]['id']});
              break;
          }
        }
      });
    }
  }

}
