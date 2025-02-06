import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterOutlet, Routes, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const componentList = [LayoutsComponent, HeaderComponent, SidenavComponent];

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'banks',
        loadChildren: () =>
          import('../pages/banks/banks.module').then(
            (m) => m.BanksModule
          ),
      },
      {
        path: 'expense',
        loadChildren: () => 
          import('../pages/expense/expense.module').then(
            (m) => m.ExpenseModule
          ),
      },
      {
        path: 'share-market',
        loadChildren: () => 
          import('../pages/share-market/share-market.module').then(
            (m) => m.ShareMarketModule
          ),
      },
      {
        path: 'health',
        loadChildren: () => 
          import('../pages/health/health.module').then(
            (m) => m.HealthModule
          ),
      },
      {
        path: 'habit',
        loadChildren: () => 
          import('../pages/habit/habit.module').then(
            (m) => m.HabitModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [...componentList],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule.forChild(routes),
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [...componentList],
})
export class LayoutsModule {}
