import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

declare var $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  //   public lottieConfig: Object;
  //   private anim: any;
  //   private animationSpeed: number = 1;

  //   constructor() {
  //       this.lottieConfig = {
  //           path: 'assets/data.json',
  //           renderer: 'canvas',
  //           autoplay: true,
  //           loop: true
  //       };
  //   }

  //   handleAnimation(anim: any) {
  //       this.anim = anim;
  //   }

  //   stop() {
  //       this.anim.stop();
  //   }

  //   play() {
  //       this.anim.play();
  //   }

  //   pause() {
  //       this.anim.pause();
  //   }

  //   setSpeed(speed: number) {
  //       this.animationSpeed = speed;
  //       this.anim.setSpeed(speed);
  //   }

  videos: any[] = [];
  videoSel: any;
  constructor(public _yts: YoutubeService) {
    this._yts.getVideos().subscribe(videos => {
      // console.log(videos);
      this.videos = videos;
    });
  }

  verVideo(video: any) {
    this.videoSel = video;
    $('#myModal').modal();

  }

  cerrarModal() {
    this.videoSel = null;
    $('#myModal').modal('hide');
  }

  cargarMas() {
    this._yts.getVideos().subscribe(videos => this.videos.push.apply(this.videos, videos));
  }
}
