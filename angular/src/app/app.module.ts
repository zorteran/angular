import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BASE_URL, IMAGE_BASE_URL } from './app-config';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserLoginComponent } from './user-login/user-login.component';
import { SessionInterceptor } from './interceptors/session.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent
  ],
  entryComponents: [
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: SessionInterceptor, multi: true
  },
  {
    provide: BASE_URL,
    useValue: environment.baseUrl
  },
  {
    provide: IMAGE_BASE_URL,
    useValue: environment.imagesBaseUrl
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
