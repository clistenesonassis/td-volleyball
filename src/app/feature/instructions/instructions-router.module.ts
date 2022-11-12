import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step01Component } from './step-01/step-01.component';
import { Step02Component } from './step-02/step-02.component';
import { Step03Component } from './step-03/step-03.component';

const routes: Routes = [
  {
    path: '',
    component: Step01Component,
  },
  {
    path: 'step02',
    component: Step02Component,
  },
  {
    path: 'step03',
    component: Step03Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
  providers: [],
})
export class InstructionsRouterModule {}
