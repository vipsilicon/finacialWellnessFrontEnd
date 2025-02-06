import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareMarketComponent } from './share-market.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ShareMarketComponent
  }
];

@NgModule({
  declarations: [ShareMarketComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ShareMarketComponent]
})
export class ShareMarketModule { }
