import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from '../../../../environment/environment';
import { Auth } from '../../interfaces/Auth';
import { User } from '../../interfaces/User';
import { LoginHelper } from '../../utils/login.helper';
import { TokenStore } from '../../utils/token.helper';
import { StoreService } from '../../utils/store.helper';
import { DeviceInfo } from 'ngx-device-detector';

interface ILogoutProps {
  redirectToLogin: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenStore: TokenStore,
    private storeService: StoreService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginHelper: LoginHelper
  ) {}

  authenticate(login: { email: string; password: string }, 
    deviceInfo?: DeviceInfo
  ): Observable<Auth> {
    console.log("Authentication" + login);
    return this.http
      .post<Auth>(environment.api + '/auth/login', { login, deviceInfo })
      .pipe(
        tap((res) => {
          this.loginHelper.login(res);
        })
      );
  }

  public logout(props?: ILogoutProps) {
    this.tokenStore.removeAuth();
    this.storeService.removeItem('user');

    if (props?.redirectToLogin) {
      this.redirectToLogin();
    }
  }

  public refreshToken() {
    const token: string = this.tokenStore.getAuth().refreshToken.token;
    return this.http
      .post<Auth>(environment.api + '/auth/refresh-token', {
        refreshToken: token,
      })
      .pipe(
        catchError((err) => {
          this.logout({
            redirectToLogin: true,
          });
          return throwError(() => new Error('test'));
        }),
        tap((res: Auth) => {
          this.tokenStore.setAuth(res);
          this.router.navigate(['dashboard']);
        })
      );
  }

  public redirectToLogin() {
    let returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];

    if (!returnUrl) {
      returnUrl = this.router.routerState.snapshot.url;
    }

    window.location.href = '/login';
  }
}
