import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: async () =>
      (await import('./feature/home/home.module')).HomeModule,
  },
  {
    path: 'register',
    loadChildren: async () =>
      (await import('./feature/register/register.module')).RegisterModule,
  },
  {
    path: 'instructions',
    loadChildren: async () =>
      (await import('./feature/instructions/instructions.module'))
        .InstructionsModule,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
