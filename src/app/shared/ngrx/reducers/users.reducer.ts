import { User } from 'src/app/interfaces/userList.interface';
import { State, createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions/users.actions';

export interface UsersState {
  users:User[],
  loaded: boolean,
  loading:boolean,
  error: any
}

export const initialState: UsersState = {
  users: [],
  loaded:false,
  loading:false,
  error:null
};

export const usersrReducer = createReducer(
initialState,
on(loadUsers, (state) => ({...state,loading:true})),

on(loadUsersSuccess, (state,{users}) =>
({...state,loading:false,loaded:true,users: [...users]})),

on(loadUsersError, (state,{payload}) =>
({...state,loading:false,loaded:false,error:{
  url:payload.url,
  name:payload.name,
  message:payload.message
}})),

);
