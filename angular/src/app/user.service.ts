import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError, Subject, interval } from 'rxjs';
import { User } from './music/models/user.model';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './app-config';
import { switchMap, tap, startWith, merge, map } from 'rxjs/operators';

const sessionDuration = 15;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user$ = new BehaviorSubject<null | User>(null);

  private onRequest$ = new Subject();
  public refreshButtonClick$ = new Subject();

  private _idleTime$ = new BehaviorSubject(sessionDuration);

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string
  ) {


    Observable.create().pipe(
      startWith(1),
      merge(this.onRequest$, this.refreshButtonClick$),
      switchMap(() => {
        return interval(1000);
      }),
      map((time: number) => {
        return sessionDuration - time;
      }),
      map((time: number) => {
        return time >= 0 ? time : 0;
      })
    ).subscribe(time => {
      this._idleTime$.next(time);
      if (!time) {
        this.logout();
      }
    });
  }

  get idleTime$() {
    return this._idleTime$.asObservable();
  }

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

  onRequest(req) {
    console.log('on request', req);
    this.onRequest$.next();
  }


}
