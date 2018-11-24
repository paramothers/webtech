import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutRunnerComponent } from './workout-runner.component';
import { WorkoutServiceService } from '../core/workout-service.service';
import { ExerciseDescriptionComponent } from './exercise-description/exercise-description.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { NumberToSecondsPipe } from './shared/number-to-seconds.pipe';
import { VideoDialogComponent } from './video-player/video-dialog/video-dialog.component';
import { WorkoutAudioComponent } from './workout-audio/workout-audio.component';
import { SharedModule } from '../shared/shared.module';
import { WorkoutContainerComponent } from './workout-container/workout-container.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    WorkoutRunnerComponent,
    ExerciseDescriptionComponent,
    VideoPlayerComponent,
    NumberToSecondsPipe,
    VideoDialogComponent,
    WorkoutAudioComponent,
    WorkoutContainerComponent],

  exports: [
    WorkoutContainerComponent
  ],
  providers: [WorkoutServiceService],
  entryComponents: [VideoDialogComponent]

})
export class WorkoutRunnerModule { }
