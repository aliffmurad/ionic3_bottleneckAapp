import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-calc-bottleneck',
  templateUrl: 'calc-bottleneck.html',
})
export class CalcBottleneckPage {
  stat: string;
  color: boolean;
  cond: boolean;
  


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.stat = navParams.get('data');
  this.color = navParams.get('data2');
  this.cond = this.color;
  
  }

  ionViewDidLoad() {
  }

}
