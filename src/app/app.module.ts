import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './common/auth/auth.service';
import { AuthGuard } from './common/auth/auth.guard';
import { LoginComponent } from './common/auth/login.component';
import { TokenInterceptor } from './common/auth/token.interceptor';
import { SignUpComponent } from './common/auth/sign-up.component';
import { ToDoInfoComponent } from "./to-do-info/to-do-info.component";
import { NoAdminGuard } from './common/auth/no-admin.guard';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ToDoInfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    NoAdminGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
