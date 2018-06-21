import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreditFriendsService } from 'src/app/_services/credit-friends.service';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate {

  constructor(public router: Router, public _cfService: CreditFriendsService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.isLoggedIn(state.url);
  }

  isLoggedIn(url: any) {

    if(url === '/login') {

        return this._cfService.afAuth.authState.pipe(take(1), map(authState => {
            if(authState) {
                this.router.navigate(['/dashboard']);
                return !authState;
            } else {
                return true;
            }
        }));
    }

    return this._cfService.afAuth.authState.pipe(take(1), map(user => !!user)
            ,tap(loggedIn => {
                if(!loggedIn) {
                    this.router.navigate(['/login']);
                }
            }));
  }
}
