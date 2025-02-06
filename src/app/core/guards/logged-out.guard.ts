import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { TokenStore } from '../utils/token.helper';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class LoggedOutGuard {
    constructor(
        private authService: AuthService,
        private tokenStore: TokenStore,
        private router: Router
    ){}

    canActivate(
        router: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean>{
        const loggedOut = this.tokenStore.isValid();

        if(loggedOut){
            this.authService.logout();
            return true;
        }

        return this.router.navigate(['']);
    }
}