import { Injectable, Inject } from '@angular/core';
import { Exercise, ExercisePlan, WorkoutPlan } from '../shared/model';
import { CoreModule } from './core.module';
import { AppConfig } from './app-config';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: CoreModule
})
export class WorkoutService {



  workoutPlanArray: Array<WorkoutPlan> = [];
  exercises: Array<Exercise> = [];


  constructor(@Inject('AppConfig')
  private appConfig: AppConfig) {

    this.setupInitialExercises();
    this.setupInitialWorkouts();
  }

  updateWorkout(buildingWorkout: WorkoutPlan): any {

    for (let i = 0; i < this.workoutPlanArray.length; i++) {

      if (this.workoutPlanArray[i].name === buildingWorkout.name) {
        this.workoutPlanArray[i] = buildingWorkout;
        break;
      }
    }

  }
  addWorkout(buildingWorkout: WorkoutPlan): any {
    console.log('reached add workout in workout serfvice');
    if (buildingWorkout.name) {

      this.workoutPlanArray.push(buildingWorkout);
      return buildingWorkout;
    }
  }

  updateExercise(buildingExercise: Exercise): Exercise {

    for (let i = 0; i < this.exercises.length; i++) {

      if (this.exercises[i].name === buildingExercise.name) {
        this.exercises[i] = buildingExercise;
        break;
      }
      return buildingExercise;
    }

  }
  addExercise(buildingExercise: Exercise): Exercise {

    if (buildingExercise.name) {
      this.exercises.push(buildingExercise);
      return buildingExercise;
    }
    return null;
  }

  deleteExercise(name: string) {

    let exerciseIndex: number;

    for (let i = 0; i < this.exercises.length; i++) {
      if (this.exercises[i].name === name) {
        exerciseIndex = i;
      }
    }

    if (exerciseIndex >= 0) {
      this.exercises.splice(exerciseIndex, 1);
    }
  }

  public getExercises(): Array<Exercise> {
    return this.exercises;
  }

  public getWorkouts(): Array<WorkoutPlan> {
    return this.workoutPlanArray;
  }

  private setupInitialWorkouts(): void {

    const exercisesArray = this.getExercises();
    const workout = new WorkoutPlan('7MinWorkout', '7 Minu Wrokout', 10, [], 'just description');
    workout.exercises.push(
      new ExercisePlan(
        exercisesArray[0],
        this.appConfig.EXERCISE_DURIATION)
    );

    workout.exercises.push(
      new ExercisePlan(
        exercisesArray[1],
        this.appConfig.EXERCISE_DURIATION)
    );
    workout.exercises.push(
      new ExercisePlan(
        exercisesArray[2],
        this.appConfig.EXERCISE_DURIATION)
    );
    workout.exercises.push(
      new ExercisePlan(
        exercisesArray[3],
        this.appConfig.EXERCISE_DURIATION)
    );
    workout.exercises.push(
      new ExercisePlan(
        exercisesArray[4],
        this.appConfig.EXERCISE_DURIATION)
    );
    workout.exercises.push(
      new ExercisePlan(
        exercisesArray[5],
        this.appConfig.EXERCISE_DURIATION)
    );
    workout.exercises.push(
      new ExercisePlan(
        exercisesArray[6],
        this.appConfig.EXERCISE_DURIATION)
    );
    workout.exercises.push(
      new ExercisePlan(
        exercisesArray[7],
        this.appConfig.EXERCISE_DURIATION)
    );
    workout.exercises.push(
      new ExercisePlan(
        exercisesArray[8],
        this.appConfig.EXERCISE_DURIATION)
    );
    workout.exercises.push(
      new ExercisePlan(
        exercisesArray[9],
        this.appConfig.EXERCISE_DURIATION)
    );
    workout.exercises.push(
      new ExercisePlan(
        exercisesArray[10],
        this.appConfig.EXERCISE_DURIATION)
    );
    workout.exercises.push(
      new ExercisePlan(
        exercisesArray[11],
        this.appConfig.EXERCISE_DURIATION)
    );
    this.workoutPlanArray.push(workout);
  }
  private setupInitialExercises(): void {

    this.exercises.push(
      new Exercise(
        'jumpingJacks',
        'Jumping Jacks',
        'A jumping jack or star jump, also called side-straddle hop is a physical jumping exercise.',
        'JumpingJacks.png',
        'jumpingjacks.wav',
        `Assume an erect position, with feet together and arms at your side. <br>
            Slightly bend your knees, and propel yourself a few inches into the air. <br>
            While in air, bring your legs out to the side about shoulder width or slightly wider. <br>
            As you are moving your legs outward, you should raise your arms up over your head;
            arms should be slightly bent throughout the entire in-air movement. <br>
            Your feet should land shoulder width or wider as your hands meet above your head with arms slightly bent`,
        ['dmYwZH_BNd0', 'BABOdJ-2Z6o', 'c4DAnQ6DtF8'])
    );

    this.exercises.push(
      new Exercise(
        'wallSit',
        'Wall Sit',
        'A wall sit, also known as a Roman Chair, is an exercise done to strengthen the quadriceps muscles.',
        'wallsit.png',
        'wallsit.wav',
        `Place your back against a wall with your feet shoulder width apart and a little ways out from the wall.
           Then, keeping your back against the wall, lower your hips until your knees form right angles.`,
        ['y-wV4Venusw', 'MMV3v4ap4ro'])
    );

    this.exercises.push(
      new Exercise(
        'pushUp',
        'Push up',
        'A push-up is a common exercise performed in a prone position by raising and lowering the body using the arms',
        'Pushup.png',
        'pushups.wav',
        `Lie prone on the ground with hands placed as wide or slightly wider than shoulder width.
           Keeping the body straight, lower body to the ground by bending arms at the elbows.
           Raise body up off the ground by extending the arms.`,
        ['Eh00_rniF8E', 'ZWdBqFLNljc', 'UwRLWMcOdwI', 'ynPwl6qyUNM', 'OicNTT2xzMI'])
    );

    this.exercises.push(
      new Exercise(
        'crunches',
        'Abdominal Crunches',
        'The basic crunch is a abdominal exercise in a strength-training program.',
        'crunches.png',
        'crunches.wav',
        `Lie on your back with your knees bent and feet flat on the floor, hip-width apart.
           Place your hands behind your head so your thumbs are behind your ears.
           Hold your elbows out to the sides but rounded slightly in.
           Gently pull your abdominals inward.
           Curl up and forward so that your head, neck, and shoulder blades lift off the floor.
           Hold for a moment at the top of the movement and then lower slowly back down.`,
        ['Xyd_fa5zoEU', 'MKmrqcoCZ-M'])
    );

    this.exercises.push(
      new Exercise(
        'stepUpOntoChair',
        'Step Up Onto Chair',
        'Step exercises are ideal for building muscle in your lower body.',
        'stepUpOntoChair.png',
        'stepup.wav',
        `Position your chair in front of you.
           Stand with your feet about hip width apart, arms at your sides.
           Step up onto the seat with one foot, pressing down while bringing your other foot up next to it.
           Step back with the leading foot and bring the trailing foot down to finish one step-up.`,
        ['aajhW7DD1EA'])
    );

    this.exercises.push(
      new Exercise(
        'squat',
        'Squat',
        'The squat is a compound, full body exercise that trains primarily the muscles of the thighs, hips, buttocks and quads.',
        'squat.png',
        'squats.wav',
        `Stand with your head facing forward and your chest held up and out.
           Place your feet shoulder-width apart or little wider. Extend your hands straight out in front of you.
           Sit back and down like you're sitting into a chair. Keep your head facing straight as your upper body bends
           forward a bit. Rather than allowing your back to round, let your lower back arch slightly as you go down.
           Lower down so your thighs are parallel to the floor, with your knees over your ankles.
           Press your weight back into your heels.
           Keep your body tight, and push through your heels to bring yourself back to the starting position.`,
        ['QKKZ9AGYTi4', 'UXJrBgI2RxA'])
    );

    this.exercises.push(
      new Exercise(
        'tricepdips',
        'Tricep Dips On Chair',
        'A body weight exercise that targets triceps.',
        'tricepdips.png',
        'tricepdips.wav',
        `Sit up on a chair. Your legs should be slightly extended, with your feet flat on the floor.
          Place your hands edges of the chair. Your palms should be down, fingertips pointing towards the floor.
          Without moving your legs, bring your glutes forward off the chair.
          Steadily lower yourself. When your elbows form 90 degrees angles, push yourself back up to starting position.`,
        ['tKjcgfu44sI', 'jox1rb5krQI'])
    );

    this.exercises.push(
      new Exercise(
        'plank',
        'Plank',
        // tslint:disable-next-line:max-line-length
        'The plank (also called a front hold, hover, or abdominal bridge) is an isometric core strength exercise that involves maintaining a difficult position for extended periods of time.',
        'Plank.png',
        'plank.wav',
        `Get into pushup position on the floor.
           Bend your elbows 90 degrees and rest your weight on your forearms.
           Your elbows should be directly beneath your shoulders, and your body should form a straight line from head to feet.
           Hold this position.`,
        ['pSHjTRCQxIw', 'TvxNkmjdhMM'])
    );

    this.exercises.push(
      new Exercise(
        'highKnees',
        'High Knees',
        'A form exercise that develops strength and endurance of the hip flexors and quads and stretches the hip extensors.',
        'highknees.png',
        'highknees.wav',
        `Start standing with feet hip-width apart.
           Do inplace jog with your knees lifting as much as possible towards your chest.`,
        ['OAJ_J3EZkdY', '8opcQdC-V-U'])
    );

    this.exercises.push(
      new Exercise(
        'lunges',
        'Lunges',
        // tslint:disable-next-line:max-line-length
        'Lunges are a good exercise for strengthening, sculpting and building several muscles/muscle groups. including the quadriceps (or thighs), the gluteus maximus (or buttocks) as well as the hamstrings.',
        'lunges.png',
        'lunge.wav',
        `Start standing with feet hip-width apart.
           Do inplace jog with your knees lifting as much as possible towards your chest.`,
        ['Z2n58m2i4jg'])
    );

    this.exercises.push(
      new Exercise(
        'pushupNRotate',
        'Pushup And Rotate',
        'A variation of pushup that requires you to rotate.',
        'pushupNRotate.png',
        'pushupandrotate.wav',
        `Assume the classic pushup position, but as you come up, rotate your body so your right arm lifts up and extends overhead.
           Return to the starting position, lower yourself, then push up and rotate till your left hand points toward the ceiling.`,
        ['qHQ_E-f5278'])
    );

    this.exercises.push(
      new Exercise(
        'sidePlank',
        'Side Plank',
        'A variation to Plank done using one hand only.',
        'sideplank.png',
        'sideplank.wav',
        `Lie on your side, in a straight line from head to feet, resting on your forearm.
           Your elbow should be directly under your shoulder.
           With your abdominals gently contracted, lift your hips off the floor, maintaining the line.
           Keep your hips square and your neck in line with your spine. Hold the position.`,
        ['wqzrb67Dwf8', '_rdfjFSFKMY'])
    );

  }

  public getWorkout(name: string): WorkoutPlan {

    for (const workout of this.workoutPlanArray) {
      if (workout.name === name) {
        return workout;
      }
    }
    return null;
  }

  public getExercise(name: string): Exercise {

    for (const exercise of this.exercises) {

      if (exercise.name === name) {
        return exercise;
      }
      return null;
    }

  }



  public getWorkoutPlan(): WorkoutPlan {



    let workoutPlan: WorkoutPlan;

    workoutPlan = new WorkoutPlan('7-Minute', '7-Minute Workout', 5, [], 'it is for workout to complete in 7 minutes');
    // TODO: move this numbers to constant util file
    workoutPlan.exercises.push(new ExercisePlan(this.getJumpingExercise(), this.appConfig.EXERCISE_DURIATION));
    workoutPlan.exercises.push(new ExercisePlan(this.getWallSittingExercise(), this.appConfig.EXERCISE_DURIATION));
    workoutPlan.exercises.push(new ExercisePlan(new Exercise('Running Exercise', 'Running', 'Healing Heart', 'running.png',
      '', 'Procedurere...Procedurere...Procedurere...Procedurere...',
      ['Eh00_rniF8E', 'ZWdBqFLNljc', 'UwRLWMcOdwI', 'ynPwl6qyUNM', 'OicNTT2xzMI']), this.appConfig.EXERCISE_DURIATION));

    return workoutPlan;
  }

  private getWallSittingExercise(): Exercise {

    return new Exercise('Waling Exercise', 'Waking', 'Mind fresh', 'wallsit.png', '',
      'Procedurere...Procedurere...Procedurere...Procedurere...',
      ['y-wV4Venusw', 'MMV3v4ap4ro']);
  }

  private getJumpingExercise(): Exercise {

    return new Exercise('Jumping Exercise', 'Jumping', 'Help legs and stomac', 'JumpingJacks.png', '',
      'Procedurere...<br>Procedurere... <br> Procedurere...<br>Procedurere...',
      ['dmYwZH_BNd0', 'BABOdJ-2Z6o', 'c4DAnQ6DtF8']);
  }
}
