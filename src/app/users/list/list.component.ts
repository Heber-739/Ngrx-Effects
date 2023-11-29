import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/interfaces/userList.interface';
import { loadUsers } from 'src/app/shared/ngrx/actions';
import { AppState } from 'src/app/shared/ngrx/app.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit{

  usuarios: User[] = [];
  loading: boolean = false;
  error: any;

  users:User[]=[];

  private store:Store<AppState> = inject(Store<AppState>)
  private router:Router = inject(Router);


  ngOnInit(): void {
    this.getUsers()
    this.store.dispatch(loadUsers())
  }

  private getUsers(){
    this.store.select('users').subscribe( ({users,loading,error}) => {
      this.users = users;
      this.loading  = loading;
      this.error    = error;
    });
  }

  goUser(id:number){
    this.router.navigate([`/users/${id}`])
  }

}
