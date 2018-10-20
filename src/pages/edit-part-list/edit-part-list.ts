import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Item } from '../../models/item/item.module';
import { pcpartlist } from '../../services/pcpartlist/pc-part-list.service';
import { ToastService } from '../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-edit-part-list',
  templateUrl: 'edit-part-list.html',
})
export class EditPartListPage {
  item: Item;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private pcpart1: pcpartlist,
    private toast: ToastService
  ) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item){
    this.pcpart1.editItem(item)
    .then(() =>{
      this.toast.show(`${item.processor} saved!`);
      this.navCtrl.push('DisplayPcListPage');
    });

  }

  removeItem(item: Item){
    this.pcpart1.removeItem(item)
    .then(() => {
      this.toast.show(`${item.processor} deleted!`);
      this.navCtrl.push('DisplayPcListPage');

    });
  }

}
