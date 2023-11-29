import { loadUsersSuccess } from './../actions/users.actions';
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap, of, catchError, map } from 'rxjs';
import * as userAct from '../actions';
import { UsersService } from 'src/app/services/users.service';

@Injectable()
export class UserEffects {

constructor(
  private actions$:Actions,
  private usersS:UsersService,
){}


  loadUser$ = createEffect(
    ()=> this.actions$.pipe(
      ofType( userAct.loadUser ),
      mergeMap(({id})=>this.usersS.getUserById(id).pipe(
        tap(res => console.log(res)),
        map((user)=>userAct.loadUserSuccess({user})),
        catchError( err => of(userAct.loadUserError({ payload: err })) )
      ))
    )
  )



}
