import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { LoginService } from './shared/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('guard roles', next.data);
    if (next.data.roles && next.data.roles) {

    }
    return this.loginService.loginDialog().pipe(
      take(1),
      map(user => {


        if (next.data.roles && user && (next.data.roles.indexOf(user.role) + 1)) {
          console.log('user is admin', user);
          return true;
        } else {
          console.log('user is not admin', user);
          this.router.navigate(['/error/forbidden']);
          return false;
        }
      }),
      map(u => !!u)
    );
  }
}
