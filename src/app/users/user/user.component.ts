import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { User } from 'src/app/interfaces/userList.interface';
import { loadUser } from 'src/app/shared/ngrx/actions';
import { AppState } from 'src/app/shared/ngrx/app.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit{

  user:User|null = null


  private routes:ActivatedRoute = inject(ActivatedRoute);
  private store:Store<AppState> = inject(Store<AppState>)


ngOnInit(): void {
    this.getId()
    this.store.select('user').subscribe(res =>
      this.user = res.user)
}

private getId(){
  this.routes.params.pipe(
    tap(res => console.log(res))
  ).subscribe(({id})=>
  this.store.dispatch( loadUser({id})
  )
  )
}


}
