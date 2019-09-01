import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
declare var google;
@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  @ViewChild('map') mapElement: ElementRef;
  map:any;
  constructor(
    public navCtrl: NavController,
    public http: HttpClient
  ) {}

  ionViewDidLoad(){
    this.displayGoogleMap();
    this.getMarkers();
  }

  displayGoogleMap(){
    let latLng = new google.maps.LatLng(3.454226, -76.507237);
    let mapOptions = {
      center:latLng,
      zoom:14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  getMarkers(){
    this.http.get('assets/data/marker.json').subscribe(data=>{
      console.log(data)
      this.addMarkersMap(data);
    })
  }

  addMarkersMap(markers){
    for(let marker of markers){
      var loc = {lat: marker.latitude, lng: marker.longitude};
      console.log(loc);
      marker = new google.maps.Marker({
        position: loc,
        map: this.map,
        title: marker.name,
        label: {text: marker.content, color: "white"}
      });
      this.addInfoWindow(marker, marker.title);
    }
  }

  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
        content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
    });

  }


}
