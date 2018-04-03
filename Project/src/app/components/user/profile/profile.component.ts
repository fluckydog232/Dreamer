import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  userId: String;
  username: String;
  email: String;
  currentpassword: String;
  newpassword: String;
  confirmpassword: String;
  firstName: String;
  lastName: String;

  constructor(private userService: UserService,
              private activatedroute: ActivatedRoute,
              private router: Router) {}

  updateUser(user: User, username: String, email: String, firstName: String, lastName: String,
             currentpassword: String, newpassword: String, confirmpassword: String) {
    this.username = username;
    this.currentpassword = currentpassword;
    if (this.username.length === 0 || this.currentpassword.length === 0) {
      alert('missed information!');
    } else if (!(newpassword === confirmpassword)) {
      alert('password not equal');
    } else {
      this.userService.updateUser(user, username, email, firstName, lastName,
        currentpassword, newpassword, confirmpassword);
      this.router.navigate(['/user', this.userId]);
    }
  }

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
        this.userId = params['uid'];
        this.user = this.userService.findUserById(this.userId);
        console.log('userId: ', this.user._id);
      }
    );
  }
}


