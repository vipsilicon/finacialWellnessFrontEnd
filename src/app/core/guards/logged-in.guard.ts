import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStore } from '../utils/token.helper';
import { AuthService } from '../services/auth/auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class LoggedInGuard {
    constructor(
        private tokenStore: TokenStore,
        private authService: AuthService,
        private router: Router
    ){}

    canActivate(
        router: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean>{
        const auth = this.tokenStore.getAuth();

        if(!auth){
            this.authService.logout();
            this.router.navigate(['/login']);
            return false;
        }
        if(!auth.userSession){
            this.authService.logout();
            this.router.navigate(['/login']);
            return false;
        } 
        
    
        return true;
    }
}