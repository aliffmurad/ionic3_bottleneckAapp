import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { pcpartlist } from '../../services/pcpartlist/pc-part-list.service';
import { Item } from '../../models/item/item.module';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-display-pc-list',
  templateUrl: 'display-pc-list.html',
})
export class DisplayPcListPage {

  PartList$: Observable<Item[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private pcpart: pcpartlist) {

      this.PartList$ = this.pcpart
        .getPcPartList()
        .snapshotChanges()
        .map(
          changes => {
            return changes.map(c => ({
              key: c.payload.key,
               ...c.payload.val(),
            }));
          });
        

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPcListPage');
  }

}
