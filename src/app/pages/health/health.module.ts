import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthComponent } from './health.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HealthComponent
  }
];

@NgModule({
  declarations: [HealthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [HealthComponent]
})
export class HealthModule { }
