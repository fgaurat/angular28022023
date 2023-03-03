import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  findAll(): Observable<Todo[]> {
    console.log(environment.url_todos);
    return this.httpClient.get<Todo[]>(environment.url_todos);
  }

  delete(todo: Todo): Observable<any> {
    const url = `${environment.url_todos}/${todo.id}`;
    return this.httpClient.delete<any>(url);
  }

  save(todo: Todo): Observable<Todo> {
    
    return this.httpClient.post<Todo>(
      environment.url_todos,
      todo,
      this.httpOptions
    );
  }
}
