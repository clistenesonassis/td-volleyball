import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { InstructionsRouterModule } from './instructions-router.module';
import { InstructionsComponent } from './instructions.component';

const materialModules = [MatButtonModule];

@NgModule({
  imports: [CommonModule, InstructionsRouterModule, ...materialModules],
  exports: [],
  declarations: [InstructionsComponent],
  providers: [],
})
export class InstructionsModule {}
