import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import 'rxjs/add/operator/do';
import { EmailValidator } from '@angular/forms';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

  
export interface IUser {
    id: number;
    first: string;
    last: string;
    email: string;
    phone: string;
    userRoleId: number;
    aboutMe: string;
  }

export interface ILoginResponse {
    success: boolean;
    token?: string;
    user: IUser;
}

export enum UserRoles {
    Admin = 4,
    User = 3,
  }

@Injectable()
export class AuthService {

    token: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
    ) { }

    isAuthenticated(): boolean {
        return this.token ? true : false;
    }

    login(email: string, password: string): Observable<ILoginResponse> {
        const data = {
            email: email,
            password: password,
        };
        return this.http.post<ILoginResponse>('http://localhost:3000/login', data)
        .pipe(
        tap((response) => {
                this.token.next(
                    (response && response.success && response.token) || null);
                    this.isAdmin.next(
                        response &&
                          response.success &&
                          response.user.userRoleId === UserRoles.Admin
                          ? true
                          : false,
            );

                }),
        );
    }

    logout(): void {
        this.token.next(null);
        this.isAdmin.next(false);
    }

    getAll(): Observable<IUser[]> {
        return this.http.get<IUser[]>('http://localhost:3000/users');
    }

    signup (         
        
        firstName: string, lastName: string, 
        email: string, phoneNumber: string, aboutMe: string, password: string, confirmPassword: string
        ) 
        : Observable<any>
         {
          const data = {
            first: firstName,
            last: lastName,
            email: email,
            phone: phoneNumber,
            userRoleId: 4,
            aboutMe: " About me ",
            password: password,
         
           createdAt: Date.now(),
           updatedAt: Date.now(), 
        
            
            isTrainer: 1,
          };
          console.log("Entered Auth.service.ts") ;
          console.log(firstName, lastName, email, phoneNumber, password, Date.now());
        return this.http.post<any>('http://localhost:3000/users', data );
 
        }
   
}
