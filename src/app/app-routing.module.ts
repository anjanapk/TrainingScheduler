import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './common/auth/login.component';
import { SignUpComponent } from './common/auth/sign-up.component';
import { ToDoInfoComponent } from './to-do-info/to-do-info.component';

import { AuthGuard } from './common/auth/auth.guard';
import { NoAdminGuard } from './common/auth/no-admin.guard';

import { ToDoListComponent } from './to-do-info/list/event-list.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'todo', component: ToDoInfoComponent },

  { path:  'session',
  canActivate: [AuthGuard],
  component: ToDoListComponent,  
 },

  { path: '**', component: HomeComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule { }
