import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationServiceService } from '../../authentication-module/services/AuthenticationServiceService';

@Injectable()
export class GuradConditionService implements CanActivate {

    constructor(private authenticationService: AuthenticationServiceService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        const isAuthenticated: boolean = this.authenticationService.isAuthenticated();
        if (!isAuthenticated) {

            this.router.navigateByUrl('/app-friends-login');
        }

        return isAuthenticated;


    }

}
