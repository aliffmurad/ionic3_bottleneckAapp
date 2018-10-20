import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.module';
import { pcpartlist } from '../../services/pcpartlist/pc-part-list.service';
import { ToastService } from '../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-add-pc-part',
  templateUrl: 'add-pc-part.html',
})
export class AddPcPartPage {

  item: Item = {
    processor: '',
    graphicCard: '',
    storage: '',
    motherboard: '',
    quantity: undefined
  };
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private pcpart: pcpartlist,
    private toast: ToastService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPcPartPage');
  }

  addPcPartList(item: Item){
    this.pcpart.addPcPartList(item)
    .then(ref => {
      this.toast.show(`${item.processor} added!`);
      this.navCtrl.push('DisplayPcListPage',{key: ref.key});

    });

  }

}
