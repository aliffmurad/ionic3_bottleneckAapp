import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { YtProvider } from '../../providers/yt/yt';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-tutorials',
  templateUrl: 'tutorials.html',
})
export class TutorialsPage {
  channelId = 'UCkWQ0gDrqOCarmUKmppD7GQ';
  playlists : Observable<any[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private ytProvider: YtProvider,
              private alertCtrl: AlertController ) {
  }

  searchPlaylists(){
    this.playlists = this.ytProvider.getPlayListsForChannel(this.channelId);
    this.playlists.subscribe(data =>{
      console.log('playlists',data);

    }, err => {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'No Playlist found for that Channel ID',
        buttons: ['OK']
      });
      alert.present();
    });
  }

  openPlaylist(id){
    this.navCtrl.push('PlaylistPage', {id:id});
  }



}
