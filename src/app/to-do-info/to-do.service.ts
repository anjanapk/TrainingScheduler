import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IToDo } from './to-do';
import { Observable } from 'rxjs';
import { IUser } from '../common/auth/auth.service';
  

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor(private http: HttpClient) { }

    getById(id: number): Observable<IToDo> {
        return this.http
                  .get<IToDo>(`http://localhost:3000/todos/${id}`);
                  
    }
             
      
    saveTodos(todo: IToDo): Observable<IToDo> {
        if (todo.id) {
            return this.http.put<IToDo>(`http://localhost:3000/todos`, todo);
          } else {
            return this.http.post<IToDo>('http://localhost:3000/todos', todo);
      }
        
    }
 
    get(text: string, isAdmin: boolean, phone: string, userId: number): Observable<IToDo[]> {
        if (isAdmin) {
          return this.http.get<IToDo[]>(
            `http://localhost:3000/todos/admin?name=${text}&phone=${phone}&userId=${userId > 0 ? userId : ''}`,
          );
        } else {
          return this.http.get<IToDo[]>(`http://localhost:3000/todos?name=${text}`);
        }
      }
    
      markDone(id: number): Observable<IToDo> {
        return this.http
          .put<IToDo>(`http://localhost:3000/todos/markDone/${id}`, null);
    }
    
}