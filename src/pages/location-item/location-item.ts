import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-location-item',
  templateUrl: 'location-item.html',
})
export class LocationItemPage {
  lati: string;
  longi: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationItemPage');
  }

  digitalMall(lati:number,longi:number){
    this.lati = "3";
    this.longi = "101.635970";
    this.navCtrl.push('MapPage',{data:lati,data2:longi});

  }

  digitalMall1(lati:number,longi:number){
    this.lati = "4";
    this.longi = "5";
    this.navCtrl.push('MapPage',{data:lati,data2:longi});
  }

}
