import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  email: string ;
  password: string ;
  verifyPassword: string;
  errorFlag: boolean;
  errorMsg: string;

  constructor(private userService: UserService,
              private activatedroute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  validEmail(email) {
    const check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return check.test(String(email).toLowerCase()); }

  register() {
    this.email = this.registerForm.value.email;
    this.password = this.registerForm.value.password;
    this.verifyPassword = this.registerForm.value.verifyPassword;

    const user = this.userService.findUserByEmail(this.email);
    if (user) {
      this.errorFlag = true;
      this.errorMsg = 'This email already existed !';
    } else if (!this.validEmail(this.email)) {
      this.errorFlag = true;
      this.errorMsg = 'The email format is unvalid !';
    } else if (this.password.indexOf(' ') >= 0) {
      this.errorFlag = true;
      this.errorMsg = 'The password cannot include blank space !';
    } else if (this.password.length < 5) {
      this.errorFlag = true;
      this.errorMsg = 'The password must include at least 5 letters/digits !';
    } else if (this.password !== this.verifyPassword) {
      this.errorFlag = true;
      this.errorMsg = 'The verify password does not match !';
    } else {
      this.errorFlag = false;
      user.email = this.email;
      user.password = this.password;
      this.userService.createUser(user);
      this.router.navigate(['/user/' + user['_id']]); }
  }
}
