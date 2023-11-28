import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/environments/env';
import { map, tap } from 'rxjs';
import { UserListResponse } from '../interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class UsersService {


  private getUserList = env.baseUrl + env.userList;


  constructor(private http: HttpClient) {
  }

  getUsers(){
    return this.http.get<UserListResponse>(this.getUserList).pipe(
      map(res => res.data)
    )

  }

}
