export class Exercise {

  constructor(
    public name: string,
    public title: string,
    public description: string,
    public image: string,
    public nameSound?: string,
    public procedure?: string,
    public videos?: Array<string>) { }
}

export class WorkoutPlan {

  constructor(
    public name: string,
    public title: string,
    public restBetween: number,
    public exercises: ExercisePlan[],
    public description: string
  ) { }

  totalWorkoutDuration(): number {

    if (!this.exercises) {
      return;
    }
    const total = this.exercises.map((e) => e.duration1).reduce(
      (previous, current) => previous + current);

    // console.log('total time ', total);
    return (this.restBetween ? this.restBetween : 0) * this.exercises.length - 1 + total;
  }
}

export class ExercisePlan {
  constructor(
    public exercise: Exercise,
    public duration1: number
  ) { }
}

export class ExerciseProgressEvent {

  constructor(
    public exercisePlan: ExercisePlan,
    public runningFor: number,
    public timeRemaining: number,
    public workoutTimeRemaining: number
  ) { }
}

export class ExerciseChangedEvent {
  constructor(
    public currentExercisePlan: ExercisePlan,
    public nextExercisePlan: ExercisePlan
  ) {  }
}
