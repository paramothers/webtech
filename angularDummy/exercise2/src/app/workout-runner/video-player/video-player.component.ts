import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'abe-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit, OnChanges {

  private youtubeUrlPrefix = '//www.youtube.com/embed/';

  @Input()
  videos: Array<string>;

  safeVideoUrls: Array<SafeResourceUrl>;
  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }
  ngOnChanges() {

    if (this.videos) {

      this.safeVideoUrls = this.videos.map(v => this.domSanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrlPrefix + v));
    }
  }

}
