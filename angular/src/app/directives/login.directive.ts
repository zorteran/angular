import { Directive, HostBinding, HostListener } from '@angular/core';
import { LoginService } from '../shared/login.service';

@Directive({
  selector: '[appLogin]'
})
export class LoginDirective {

  constructor(private loginService: LoginService) { }


  @HostBinding('style.cursor') cursor = 'pointer';
  @HostBinding('style.color') color = 'red';

  @HostListener('click')
  onclick() {
    console.log('click by directive!');

    this.loginService.loginDialog().subscribe();
  }

}
