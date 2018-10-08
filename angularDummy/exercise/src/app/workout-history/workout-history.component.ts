import { Component, OnInit } from '@angular/core';
import { WorkoutEntry, WorkoutHistoryTrackerService } from '../core/workout-history-tracker.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-workout-history',
  templateUrl: './workout-history.component.html',
  styleUrls: ['./workout-history.component.css']
})
export class WorkoutHistoryComponent implements OnInit {

  history: Array<WorkoutEntry> = [];
  completed: boolean;
  constructor(private tracker: WorkoutHistoryTrackerService, private location: Location) { }

  ngOnInit() {

    this.history = this.tracker.getHistory();
  }

  getBack() {

    this.location.back();
  }

}
