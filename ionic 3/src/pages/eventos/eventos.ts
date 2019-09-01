import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner";

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner
    ) {
      this.id_Estudiante=navParams.get('id_Alumno');
  }

  id_Estudiante:any='';
  scannedData:any={};
  options: BarcodeScannerOptions;

  ionViewDidLoad() {
    
  }

  scan(){
    this.options = {
      prompt: "Por favor escanear su codigo"
    }
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.scannedData = barcodeData;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  lugar(){
    this.navCtrl.push("MapaPage");
  }

}
