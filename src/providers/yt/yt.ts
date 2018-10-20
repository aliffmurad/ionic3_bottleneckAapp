import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class YtProvider {
  apiKey = 'AIzaSyDRcF8TBYQW1PnU_CErE_0WNAWegjZjlWA';

  constructor(public http: Http) {
   
  }

  getPlayListsForChannel(channel){
    return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKey 
            + '&channelId=' + channel + '&part=snippet,id&maxResults=10')
            .map(res => {
              return res.json()['items'];
            })

  }

  getListVideos(listId){
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey 
            + '&playlistId=' + listId + '&part=snippet,id&maxResults=10')
            .map(res => {
              return res.json()['items'];
            })

  }
}
