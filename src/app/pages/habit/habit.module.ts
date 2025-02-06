import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitComponent } from './habit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HabitComponent
  }
];

@NgModule({
  declarations: [HabitComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [HabitComponent]
})
export class HabitModule { }
