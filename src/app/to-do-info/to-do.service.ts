import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IUser } from '../common/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor(private http: HttpClient) { }

    getById(id: number): Observable<IUser> {
        return this.http
                  .get<IUser>(`http://localhost:3000/users/${id}`);
    }

    saveTodos(todo: IUser): Observable<IUser> {
        return this.http.post<IUser>('http://localhost:3000/users', todo);
    }
 
    
}