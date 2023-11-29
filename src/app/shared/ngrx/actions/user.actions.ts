import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces/userList.interface';


export const loadUser = createAction(
  '[User] loadUser',
  props<{ id:string }>()
  );


export const loadUserSuccess = createAction(
  '[User] loadUserSuccess',
  props<{user:User}>()
);

export const loadUserError = createAction(
  '[User] loadUserError',
  props<{payload:any}>()
);
