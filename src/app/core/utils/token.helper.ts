import { Injectable } from '@angular/core';
import { StoreService } from './store.helper';

const KEY = 'auth';

@Injectable({ providedIn: 'root' })
export class TokenStore {
  constructor(private store: StoreService) {}

  public isValid() {
    return !!this.getAuth();
  }

  public getAuth(): any {
    return this.store.getItem(KEY) ? this.store.getItem(KEY) : false;
  }

  public setAuth(auth: any): void {
    this.store.setItem(KEY, auth);
  }

  public removeAuth(): void {
    this.store.removeItem(KEY);
  }
}
