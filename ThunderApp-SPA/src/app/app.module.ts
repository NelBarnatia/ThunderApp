import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { from } from 'rxjs';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorInterceptorProvide } from './_services/error.interceptor';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvide
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
