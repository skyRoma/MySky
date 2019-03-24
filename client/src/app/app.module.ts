import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HomeModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {}, // https://github.com/auth0/angular2-jwt#usage-injection
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
