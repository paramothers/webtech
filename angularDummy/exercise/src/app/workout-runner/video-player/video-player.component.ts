import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styles: []
})
export class VideoPlayerComponent implements OnInit, OnChanges {

  private youtubeUrlPrefix = '//www.youtube.com/embed/';

  @Input()
  videos: Array<string>;

  safeVideoUrls: Array<SafeResourceUrl>;

  constructor(private sanitize: DomSanitizer) { }

  ngOnInit() {
  }

  ngOnChanges() {

    this.safeVideoUrls = this.videos ?
      this.videos.map(v => this.sanitize.bypassSecurityTrustResourceUrl(this.youtubeUrlPrefix + v))
      : this.videos;
  }

  playVideo(videoId: string) {

    // this.modal.open(VideoDialogComponent, overlayConfigFactory(new VideoDialogContext(videoId)));
  }

}
