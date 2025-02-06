import { Injectable } from '@angular/core';
import { Auth } from '../interfaces/Auth';
import { StoreService } from './store.helper';
import { TokenStore } from './token.helper';

@Injectable({ providedIn: 'root' })
export class LoginHelper {
  constructor(
    private storeService: StoreService,
    private tokenService: TokenStore
  ) {}

  login(auth: Auth) {
    this.storeService.setItem('user', auth.user);
    this.tokenService.setAuth(auth);
  }
}
