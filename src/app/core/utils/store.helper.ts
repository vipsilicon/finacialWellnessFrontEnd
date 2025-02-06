import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StoreService {
  getItem(key: string): any {
    return localStorage.getItem(key)
      ? JSON.parse(atob(localStorage.getItem(key) || ''))
      : false;
  }

  setItem(key: string, item: any): void {
    localStorage.setItem(key, btoa(JSON.stringify(item)));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
