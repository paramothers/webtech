import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseBuilderService } from '../builder-service/exercise-builder.service';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Exercise } from 'src/app/shared/model';
import { AlphaNumericValidator } from '../alpha-numeric-validator';

@Component({
  selector: 'abe-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit, OnDestroy {

  exercise: Exercise;
  sub: any;
  public exerciseForm: FormGroup;
  videoArray: FormArray = new FormArray([]);
  submitted: boolean = false;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public exerciseBuilderService: ExerciseBuilderService,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.sub = this.route.data.subscribe(
      (data: { exercise: Exercise }) => {

        this.exercise = data.exercise;
      }
    );

    this.buildExerciseForm();
  }
  buildExerciseForm(): any {

    this.exerciseForm = this.formBuilder.group({

      'name': [this.exercise.name, [Validators.required, AlphaNumericValidator.invalidAlphaNumeric]],
      'title': [this.exercise.title, Validators.required],
      'description': [this.exercise.description, Validators.required],
      'image': [this.exercise.image, Validators.required],
      'nameSound': [this.exercise.nameSound],
      'procedure': [this.exercise.procedure],
      'videos': this.addVideoArray()

    });

  }

  addVideoArray(): FormArray {
    if (this.exercise.videos) {
      this.exercise.videos.forEach((video: any) => {
        this.videoArray.push(new FormControl(video, Validators.required));
      });
    }
    return this.videoArray;
  }

  onSubmit(exerciseForm: FormGroup) {

    this.submitted = true;
    if (!exerciseForm.valid) {
      return;
    }
    this.mapFromValues(exerciseForm);
    this.exerciseBuilderService.save();
    this.router.navigate(['/builder/exercises']);
  }

  delete() {

    this.exerciseBuilderService.delete();
    this.router.navigate(['/builder/exercises']);
  }

  addVideo() {

    this.exerciseBuilderService.addVideo();
    const vidArray = <FormArray>this.exerciseForm.controls['videos'];
    vidArray.push(new FormControl('', Validators.required));
  }

  canDeleteExercise() {

    this.exerciseBuilderService.canDeleteExercise();
  }

  deleteVideo(index: number) {

    this.exerciseBuilderService.deleteVideo(index);
    const vidArray = <FormArray>this.exerciseForm.controls['videos'];
    vidArray.removeAt(index);
  }

  mapFromValues(form: FormGroup) {

    this.exercise.name = form.controls['name'].value;
    this.exercise.title = form.controls['title'].value;
    this.exercise.description = form.controls['description'].value;
    this.exercise.image = form.controls['image'].value;
    this.exercise.nameSound = form.controls['nameSound'].value;
    this.exercise.procedure = form.controls['procedure'].value;
    this.exercise.videos = form.controls['videos'].value;
  }

  ngOnDestroy(): void {

    this.sub.unsubscribe();
  }


}
