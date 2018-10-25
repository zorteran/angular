import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { User } from './music/models/user.model';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './app-config';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user$ = new BehaviorSubject<null | User>(null);
  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string
  ) { }

  public get user$() {
    return this._user$.asObservable();  // Po to by nie dawać innym możliwośći next() na subject-cie
  }

  login(username: String, password: String) {
    return this.http.get<User[]>(this.baseUrl + '/users?name=' + username + '&password=' + password).pipe(
      switchMap((users) => {
        if (users.length) {
          return of(users[0]);
        } else {
          return throwError('not found');
        }
      }),
      tap(user => this._user$.next(user))
    );
  }

  logout() {
    this._user$.next(null);
  }

}
