import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/environments/env';
import { Observable, map, tap } from 'rxjs';
import { User, UserListResponse } from '../interfaces/userList.interface';
import { UserResponse } from '../interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class UsersService {


  private getUserList = env.baseUrl + env.userList;
  private getUser = env.baseUrl + env.getUser;


  constructor(private http: HttpClient) {}

  getUsers():Observable<User[]>{
    return this.http.get<UserListResponse>(this.getUserList).pipe(
      map(res => res.data)
    )
  }

  getUserById(id:string):Observable<User>{
    return this.http.get<UserResponse>(`${this.getUser}/${id}`).pipe(
      tap(res => console.log(res)),
      map(res => res.data)
    )
  }

}
