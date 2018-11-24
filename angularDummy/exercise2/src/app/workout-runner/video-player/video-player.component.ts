import { Component, OnInit, Input } from '@angular/core';

import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { overlayConfigFactory } from 'ngx-modialog';
import { VideoDialogComponent, VideoDialogContext } from './video-dialog/video-dialog.component';

@Component({
  selector: 'abe-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {


  @Input()
  videos: Array<string>;

  constructor(private modal: Modal) { }

  ngOnInit() {
  }

  playVideo(vidoeId: string) {

    this.modal.open(VideoDialogComponent, overlayConfigFactory(new VideoDialogContext(vidoeId)));
  }


}
