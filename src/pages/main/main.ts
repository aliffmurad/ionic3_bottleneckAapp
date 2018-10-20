import { Component } from '@angular/core';
import { IonicPage, NavController,App, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { AddPcPartPage } from '../add-pc-part/add-pc-part';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
    private afAuth: AngularFireAuth,
     private toast: ToastController,
    public app: App) {
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data.email && data.uid){
      this.toast.create({
        message: `Welcome to APP_NAME, ${data.email}`,
        duration: 4000
      }).present();
  }
  else{
    this.toast.create({
      message:`Could not find authentication details `,
      duration: 4000
    }).present();
  }
});


}

addpcpart(){
  this.navCtrl.push('AddPcPartPage');
}

youtube(){
  this.navCtrl.push('TutorialsPage');
  
}

mapItem(){
  this.navCtrl.push('LocationItemPage');
}

map(){
  this.navCtrl.push('MapPage');
}

mapNav(){
  this.navCtrl.push('MapNaviPage');
}

pcpartlist(){
  this.navCtrl.push('PartListingPage');
  
}

choose(){
  this.navCtrl.push('CpuPartsPage');
}

logout(){
  const root = this.app.getRootNav();
  root.popToRoot();

}
}
