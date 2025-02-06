import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanksComponent } from './banks.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BanksComponent,
  },
];

@NgModule({
  declarations: [BanksComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [BanksComponent],
})
export class BanksModule {}
