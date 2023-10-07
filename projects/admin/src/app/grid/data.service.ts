import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  getIUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  createUser(user : IUser): Observable<IUser>{
    return this.http.post<IUser>('https://jsonplaceholder.typicode.com/users', user);
  }

  updateUser(user : IUser): Observable<IUser>{
    return this.http.put<IUser>(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
  }

  deleteUser(id :number): Observable<unknown>{
    return this.http.delete<unknown>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
  
}
