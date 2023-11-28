import { Component, inject } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  users:User[]|null = null

  private userService:UsersService = inject(UsersService);
  constructor(){
    this.userService.getUsers().subscribe(res => this.users = res)
  }

}
