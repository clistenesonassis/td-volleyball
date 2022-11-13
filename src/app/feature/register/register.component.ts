import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
  GetBrazilStatesService,
  Response as GetBrazilStatesResponse,
} from 'http/get-brazil-states';
import {
  GetCitiesBrazilByStateService,
  Response as GetCitiesBrazilByStateResponse,
} from 'http/get-cities-brazil-by-state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnDestroy {
  form: FormGroup;
  states: GetBrazilStatesResponse = [];
  cities: GetCitiesBrazilByStateResponse = [];

  subscription = new Subscription();

  constructor(
    private getBrazilStates: GetBrazilStatesService,
    private getCitiesBrazilByStateService: GetCitiesBrazilByStateService,
    private router: Router
  ) {
    this.getBrazilStates.response.subscribe((res) => (this.states = res));

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      state: new FormControl(0, [Validators.required]),
      city: new FormControl('', [Validators.required]),
      practiceTime: new FormControl(0, [Validators.required]),
      amountTraining: new FormControl(0, [Validators.required]),
      trainingTime: new FormControl(0, [Validators.required]),
      competitiveProfile: new FormControl('', [Validators.required]),
      competitiveLevel: new FormControl('', [Validators.required]),
      olympicGames: new FormControl('', [Validators.required]),
    });

    this.subscription.add(
      this.form
        .get('state')
        ?.valueChanges.subscribe((res) =>
          this.getCitiesBrazilByStateService
            .execute(res)
            .subscribe((cities) => (this.cities = cities))
        )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    console.log('>> Submiting...');
    console.log(this.form.getRawValue());
    this.router.navigateByUrl('/instructions');
  }
}
