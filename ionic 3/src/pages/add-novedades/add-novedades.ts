import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-add-novedades',
  templateUrl: 'add-novedades.html',
})
export class AddNovedadesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http:HttpClient,
    private toastCtrl: ToastController,
    private camera: Camera
    ) {
      this.id_curso=navParams.get("id_curso");
      this.id_usuario=navParams.get("id_usuario");
  }

  image: string = null;
  toast:any='';
  id_curso:any='';
  id_usuario:any='';
  datos:any={
    id_Materia: '',
    id_Usuario: '',
    vc_Foto:'',
    vc_Descripcion:''
  }

  ionViewDidLoad() {
    console.log(this.id_curso+"  "+this.id_usuario);
  }

  add(){
    this.datos['id_Materia']=this.id_curso;
    this.datos['id_Usuario']=this.id_usuario;
    console.log(this.datos);
    var url="http://192.168.43.187:80/proyectoIonic/RegistrarNovedad.php";
    
    this.http.post(url,JSON.stringify(this.datos))
    .subscribe(data=>{
      console.log(data['Result']);
      this.toast=this.toastCtrl.create({
        message: data['Result'],
        position: 'bottom',
        duration: 4000
      });
      this.toast.present();
    });
  }

  getPicture(){
    let options: CameraOptions = {
    destinationType: this.camera.DestinationType.DATA_URL,
    targetWidth: 1000,
    targetHeight: 1000,
    quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
    this.image = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error =>{
    console.error( error );
    });
  }
 

}
