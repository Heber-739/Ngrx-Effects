import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces/userList.interface';


export const loadUsers = createAction('[Users] loadUsers');

export const loadUsersSuccess = createAction(
  '[Users] loadUsersSuccess',
  props<{users:User[]}>()
);

export const loadUsersError = createAction(
  '[Users] loadUsersError',
  props<{payload:any}>()
);
