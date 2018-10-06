import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutRunnerComponent } from './workout-runner.component';
import { ExecrciseDescriptionComponent } from './execrcise-description/execrcise-description.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ProductServiceService } from '../product-service.service';
import { SecondToPipePipe } from './shared/second-to-pipe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WorkoutRunnerComponent,
    ExecrciseDescriptionComponent,
    VideoPlayerComponent,
    SecondToPipePipe
  ],
  exports: [
    WorkoutRunnerComponent
  ],
  providers: [ProductServiceService],
})
export class WorkoutRunnerModule { }
