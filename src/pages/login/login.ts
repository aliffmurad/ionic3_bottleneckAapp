import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/models';
import { AngularFireAuth} from 'angularfire2/auth';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private toast: ToastController) {
  }

  async login(user: User){
    try{
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
    if(result){
    this.navCtrl.push('MainPage');  
    }
    }
    catch(e){
      this.toast.create({
        message:`Could not find authentication details `,
        duration: 4000
      }).present();
    }
  }

  back(){
    this.navCtrl.push(HomePage);
  }

}
