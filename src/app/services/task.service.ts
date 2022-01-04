import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TASK } from '../Task';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiURL = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<TASK[]> {
    return this.http.get<TASK[]>(this.apiURL);
  }

  deleteTask(task: TASK): Observable<TASK> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete<TASK>(url);
  }

  updateTaskReminder(task: TASK): Observable<TASK> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.put<TASK>(url, task, httpOptions);
  }

  addTask(task: TASK): Observable<TASK> {
    return this.http.post<TASK>(this.apiURL, task, httpOptions);
  }
}
