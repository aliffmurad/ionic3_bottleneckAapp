import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { User } from '../../models/models';
import { AngularFireAuth} from 'angularfire2/auth';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private toast: ToastController) {
  }

  async register(user: User){
   try{
   const result = await 
   this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
   this.navCtrl.push(HomePage);
  
  }
  catch(e){
    this.toast.create({
      message:`Fill in the blank details `,
      duration: 4000
    }).present();
  }
  }

  back(){
    this.navCtrl.push(HomePage);
  }

}
