import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsersService } from '../../../Services/users.service';

@Component({
  selector: 'app-right-side',
  imports: [],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.css'
})
export class RightSideComponent {

  userName:string = "";
  email:string = "";
  errMsg: string = "";
  constructor(private userService: UsersService,private router: Router) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (res) => {
        console.log('User:', res); 
        this.userName = res.username;
        this.email = res.email;
      },
      error: (err) => {
        console.error(err);
        this.errMsg = err.error;
      }
    });
  }

  signOut(){
    localStorage.removeItem("token")
    this.router.navigate(["/home"])
    window.location.reload();
  }
}
