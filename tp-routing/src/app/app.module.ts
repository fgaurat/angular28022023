import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProtectComponent } from './protect/protect.component';
import { FallbackComponent } from './fallback/fallback.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogInterceptor } from './log.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProtectComponent,
    FallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
