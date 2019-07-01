import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private url: string = 'https://www.googleapis.com/youtube/v3/';
  private apiKey: string = 'AIzaSyDsM1O09QB5FLdL0m5qokVH4EtD2HMZFs0';
  private playlist: string = 'UUhfyaM95zvUssGQU863_vzw';
  private nexPageToken = '';

  constructor(public http: HttpClient) {}

  getVideos() {
    const parametros = new HttpParams()
        .set('part', 'snippet')
        .set('maxResults', '10')
        .set('playlistId', this.playlist)
        .set('key', this.apiKey)
    // console.log(parametros.toString());
    if(this.nexPageToken) {
      parametros.set('pageToken', this.nexPageToken);
    }


    const url = `${this.url}playlistItems`;

    return this.http.get(url, { params: parametros }).pipe(
      map((res : any) => {
        console.log(res);
        this.nexPageToken = res.nextPageToken;

        let videos: any[] = [];
        for(let video of res.items){
          let snippet = video.snippet;
          videos.push(snippet);
        }
        return videos;
      })
    );
  }
}
