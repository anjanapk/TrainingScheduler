import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/do';
import { EmailValidator } from '@angular/forms';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

export interface ILoginResponse {
    success: boolean;
    token?: string;
}


@Injectable()
export class AuthService {

    token: BehaviorSubject<string> = new BehaviorSubject<string>(null);

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
            .do((response) => {
                this.token.next(response && response.success && response.token || null);
            });
    }

    logout(): void {
        this.token.next(null);
    }

    signup (         
        
        firstName: string, lastName: string, 
        email: string, phoneNumber: string, password: string, 
        confirmPassword: string) 
        : Observable<any>
         {
          const data = {
            first: firstName,
            last: lastName,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
            confirmPassword: confirmPassword,
            userRoleId: 2,
          };
        return this.http.post<any>('http://localhost:3000/users', data );
 
        }
   
}
