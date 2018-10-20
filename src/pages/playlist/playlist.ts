import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {Http} from '@angular/http';
import { YoutubeVideoPlayer} from '@ionic-native/youtube-video-player';
import {YtProvider} from './../../providers/yt/yt';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class PlaylistPage {
  videos: Observable<any[]>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http:Http,
              private ytProvider: YtProvider,
              private youtube: YoutubeVideoPlayer,
              private plt: Platform) {
   
  let listId = this.navParams.get('id');
  this.videos = this.ytProvider.getListVideos(listId);
  }

  openVideo(video) {
    if (this.plt.is('cordova')) {
      this.youtube.openVideo(video.snippet.resourceId.videoId);
    } else {
      window.open('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId);
    }
  }


}
