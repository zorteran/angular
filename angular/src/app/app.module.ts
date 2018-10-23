import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BASE_URL, IMAGE_BASE_URL } from './app-config';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [{
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
