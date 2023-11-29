import { loadUsersSuccess } from './../actions/users.actions';
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap, of, catchError, exhaustMap, map } from 'rxjs';
import * as usersAct from '../actions/users.actions';
import { UsersService } from 'src/app/services/users.service';

@Injectable()
export class UsersEffects {

constructor(
  private actions$:Actions,
  private usersS:UsersService,
){}


  loadUsers$ = createEffect(
    ()=> this.actions$.pipe(
      ofType( usersAct.loadUsers ),
      mergeMap(()=>this.usersS.getUsers().pipe(
        map((users)=>usersAct.loadUsersSuccess({users})),
        catchError( err => of(usersAct.loadUsersError({ payload: err })) )
      ))
    )
  )



}
