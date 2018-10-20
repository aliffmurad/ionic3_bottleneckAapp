import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google;


@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  lat: number;
  long: number;
  stat: string;
  stat2: string;
  @ViewChild('map') mapRef: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.stat = navParams.get('data');
    this.stat2 = navParams.get('data2');
  }

  ionViewWillLoad() {
    if(this.stat = "3")
    {
    this.showMap(this.lat,this.long,this.stat,this.stat2);
    }
    else if(this.stat ="4")
    {
      this.showMap(this.lat,this.long,this.stat,this.stat2);
    }
  }

  ionViewDidLoad(){
    console.log(this.stat);
  }

  showMap(lat:number,long:number,stat:string,stat2:string){
    
    lat = 3.144077;
    long = 101.710162;
    let location = new google.maps.LatLng(lat,long);
  
    const options = {
      center: location,
      zoom: 15
    };

    const map = new google.maps.Map(this.mapRef.nativeElement, options);
  
    this.addMarker(location, map);
  
  }

  

  addMarker(position, map){
    return new google.maps.Marker({
      position,
      map
    });

  }
}






