import { ActionReducerMap } from '@ngrx/store';
import {UserState, UsersState, userReducer, usersrReducer} from './reducers';


export interface AppState {
   users: UsersState,
   user: UserState,
}



export const appReducers: ActionReducerMap<AppState> = {
  users: usersrReducer,
  user:userReducer,
}
