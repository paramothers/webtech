export class Exercise {

  constructor(
    public name: string,
    public title: string,
    public description: string,
    public image: string,
    public nameSound?: string,
    public procedure?: string,
    public video?: Array<string>) { }
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
    const total = this.exercises.map((e) => e.duration).reduce((previous, current) => parseInt(previous, 10) + parseInt(current, 10));

    return (this.restBetween ? this.restBetween : 0) * this.exercises.length - 1 + total;
  }
}

export class ExercisePlan {
  constructor(
    public exercise: Exercise,
    public duration: any
  ) { }
}
