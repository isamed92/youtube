import { Pipe, PipeTransform } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'videoYoutube'
})
export class VideoYoutubePipe implements PipeTransform {

  transform(value: string): SafeResourceUrl  {

    let url = 'https://www.youtube.com/embed/';

    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

  constructor(private domSanitizer: DomSanitizer) {

  }

}
