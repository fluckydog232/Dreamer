import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  errorFlag: boolean;
  errorMsg: string;

  constructor(private userService: UserService,
              private router: Router) {}
  ngOnInit() {
  }

  login() {
    const user: User = this.userService.findUserByCredentials(this.email, this.password);
    if (user) {
      this.errorFlag = false;
      this.router.navigate(['/user', user._id]);
    } else {
      this.errorFlag = true;
      this.errorMsg = 'Invalid email or password !';
    }
  }

}
