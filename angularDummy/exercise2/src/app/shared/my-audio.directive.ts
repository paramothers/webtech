import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'audio',
  exportAs: 'MyAudio'
})
export class MyAudioDirective {

  private audioElement: HTMLAudioElement;

  constructor(elementRef: ElementRef) {

    this.audioElement = elementRef.nativeElement;
  }

  stop() {

    this.audioElement.pause();
  }

  start() {
    this.audioElement.play();
  }
  get currentTime(): number {
    return this.audioElement.currentTime;
  }

  get duration(): number {
    return this.audioElement.duration;
  }

  get playbackComplete(): boolean {

    return this.duration === this.currentTime;
  }


}
