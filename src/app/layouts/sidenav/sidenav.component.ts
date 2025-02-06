import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

export interface ISideNavList {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  sideNavList: ISideNavList[] = [
    {
      icon: "dashboard",
      label: "Dashboard",
      route: "/dashboard"
    },
    {
      icon: "account_balance",
      label: "Banks",
      route: "/banks"
    },
    {
      icon: "account_balance_wallet",
      label: "Expense",
      route: "/expense"
    },
    {
      icon: "attach_money",
      label: "Share Market",
      route: "/share-market"
    },
    {
      icon: "tag_faces",
      label: "Health",
      route: "/health"
    },
    {
      icon: "accessibility",
      label: "Habit",
      route: "/habit"
    },
  ]
}
