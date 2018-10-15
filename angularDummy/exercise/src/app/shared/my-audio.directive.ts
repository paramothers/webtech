import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'audio',
  exportAs: 'MyAudio'
})
export class MyAudioDirective {

  private audioPlayer: HTMLAudioElement;

  constructor(private element: ElementRef) {

    this.audioPlayer = element.nativeElement;
  }
  start() {
    this.audioPlayer.play();
  }

  stop() {
    this.audioPlayer.pause();
  }
  get currentTime(): number {

    return this.audioPlayer.currentTime;
  }

  duration(): number {
    return this.audioPlayer.duration;
  }

  get playbackCompleted(): boolean {

    return this.duration == this.currentTime;
  }

}
