import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserService } from '../user.service';

@Injectable()
export class SessionInterceptor implements HttpInterceptor {


    constructor(private userService: UserService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        console.log('INTERCEPT', req);

        this.userService.onRequest(req);

        return next.handle(req).pipe();

    }
}
