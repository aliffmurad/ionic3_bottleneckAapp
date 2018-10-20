import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { ListProcessorProvider } from '../../providers/list-processor/list-processor';
import { itemCal } from '../../models/itemCalculate/itemCalculate.model';
import { partlistservice } from '../../services/partlist/partlist.service';


@IonicPage()
@Component({
  selector: 'page-part-listing',
  templateUrl: 'part-listing.html',
})
export class PartListingPage {

    Processor: string;
    graphicCard: string;
    status: string;
    statusColor: number;
    textColor: boolean;
    

    /*item: itemCal = {
      proc: '',
      gpu: '',
    };*/

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public processor: ListProcessorProvider,
    private part: partlistservice,
    private toast: ToastController) {
  }

  back(){
    this.navCtrl.push('MainPage');
  }

  addItem(Processor: string,graphicCard: string,statusColor: number,textColor: boolean){
    if(this.Processor=="i3 6100" && this.graphicCard=="GTX 1080")
    {
      status = "Bottleneck detected: Your CPU is too weak for this graphic card";
      statusColor = 3;
      textColor = true;
      this.navCtrl.push('CalcBottleneckPage',{data:status,data2:textColor});
    }
    else if(this.Processor=="i5 6400" && this.graphicCard=="GTX 1080")
    {
      status = "Graphic card and processor will work great together";
      statusColor = 2;
      textColor = false;
      this.navCtrl.push('CalcBottleneckPage',{data:status,data2:textColor});
       
      

    }

  }

  /*addItem(item: itemCal){
    this.part.addPartList(item)
    .then(ref => {
      this.navCtrl.push('CalculatePage', {key: ref.key})
    });
  }*/
}
