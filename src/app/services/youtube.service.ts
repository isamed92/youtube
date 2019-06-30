import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {


  url: string = 'https://www.googleapis.com/youtube/v3/';
  apiKey: string = 'AIzaSyDsM1O09QB5FLdL0m5qokVH4EtD2HMZFs0';

  constructor(
    public http: HttpClient
  ) { }

  getVideos() {

    const url = `
      ${this.url}/playlistItems
    `;

    return this.http.get(url)
          .pipe(
            map(
              res => {
                console.log(res);
              }
            )
          );


  }

}
