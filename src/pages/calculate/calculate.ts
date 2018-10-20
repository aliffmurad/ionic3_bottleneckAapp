import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { partlistservice } from '../../services/partlist/partlist.service';
import { Observable } from 'rxjs/Observable';
import { itemCal } from '../../models/itemCalculate/itemCalculate.model';


@IonicPage()
@Component({
  selector: 'page-calculate',
  templateUrl: 'calculate.html',
})
export class CalculatePage {

  partList$: Observable<itemCal[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private part: partlistservice) {

      this.partList$ = this.part
      .getPartList()
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }));
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatePage');
  }

}
