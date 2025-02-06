import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense.component';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ExpenseComponent
  }
];

@NgModule({
  declarations: [ExpenseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ExpenseComponent]
})
export class ExpenseModule { }
