import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


/* Material Modules*/

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule
} from "@angular/material";

/* Flex */
import {FlexLayoutModule} from "@angular/flex-layout";
/* ag-Grid Module*/
import {AgGridModule} from "ag-grid-angular";


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
import { ToDoListComponent } from "./to-do-info/list/event-list.component";
import { NoAdminGuard } from './common/auth/no-admin.guard';


import {GridComponent} from './grid/grid.component';
import {FormCellComponent} from './grid/form-cell/form-cell.component';
import {BranchService} from "./branch.service";

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ToDoInfoComponent,
    ToDoListComponent,

    GridComponent,
    FormCellComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,

    MatSnackBarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FlexLayoutModule,
AgGridModule.withComponents([FormCellComponent]),
  ],
  providers: [
    AuthService,
    AuthGuard,
    NoAdminGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    BranchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
