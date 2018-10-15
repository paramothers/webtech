import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutRunnerComponent } from './workout-runner.component';
import { ExecrciseDescriptionComponent } from './execrcise-description/execrcise-description.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ProductServiceService } from '../product-service.service';
import { SecondToPipePipe } from './shared/second-to-pipe.pipe';
import { VideoDialogComponent } from './video-player/video-dialog/video-dialog.component';
import { WorkoutAudioComponent } from './workout-audio/workout-audio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WorkoutRunnerComponent,
    ExecrciseDescriptionComponent,
    VideoPlayerComponent,
    SecondToPipePipe,
    VideoDialogComponent,
    WorkoutAudioComponent
  ],
  exports: [
    WorkoutRunnerComponent,
    VideoDialogComponent
  ],
  providers: [ProductServiceService],
  entryComponents: [VideoDialogComponent]
})
export class WorkoutRunnerModule { }
