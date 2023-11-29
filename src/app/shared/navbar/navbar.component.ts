import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  private router:Router = inject(Router);

  search(id:string){
this.router.navigate([`/users/${id}`])
  }
}
