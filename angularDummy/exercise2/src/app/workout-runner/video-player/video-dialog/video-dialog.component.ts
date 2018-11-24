import { Component, OnInit } from '@angular/core';
import { ModalComponent, DialogRef } from 'ngx-modialog';
import { BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export class VideoDialogContext extends BSModalContext {

  constructor(public videoId: string) {
    super();
    this.size = 'lg';
  }

}

@Component({
  selector: 'abe-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.css']
})
export class VideoDialogComponent implements OnInit, ModalComponent<VideoDialogContext> {

  videoId: SafeResourceUrl;
  private youtubeUrlPrefix = '//www.youtube.com/embed';
  constructor(public dialog: DialogRef<VideoDialogContext>, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.videoId = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrlPrefix + this.dialog.context.videoId);
  }

  ok() {

    this.dialog.close();
  }

}
