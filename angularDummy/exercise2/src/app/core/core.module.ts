import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutHistoryTrackerService } from './workout-history-tracker.service';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class CoreModule { }
