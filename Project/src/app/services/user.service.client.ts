import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  options: RequestOptions = new RequestOptions();

  constructor(private http: Http) {
    this.http = http;
  }

  users: User[] = [
    new User('123', 'xdu2017', 'du.xing1@husky.neu.edu', 'xdu2017', 'Xing', 'Du'),
    new User('234', 'there2win', 'li.haoli@husky.neu.edu', 'there2win', 'Haolin', 'Li'),
    new User('345', 'vickyzhang', 'zhang.q@husky.neu.edu', 'vickyzhang', 'Qi', 'Zhang'),
    new User('456', 'jinniu', 'niu.jin@husky.neu.edu', 'jinniu', 'Jin', 'Niu'),
  ];

  api = {
    'findUserByCredentials': this.findUserByCredentials,
    'findUserById': this.findUserById,
    'updateUser': this.updateUser,
  };

  updateUser(user: User, username: String, email: String, firstName: String, lastName: String,
             currentpassword: String, newpassword: String, confirmpassword: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === user._id && this.users[x].password === currentpassword) {
        this.users[x].username = username;
        this.users[x].email = email;
        this.users[x].firstName = firstName;
        this.users[x].lastName = lastName;
        if (newpassword === confirmpassword && newpassword.length > 0) {
          this.users[x].password = newpassword;
        }
        return this.users[x];
      }
    }
  }

  findUserByCredentials(username: String, password: String) {
    return this.users.find(function (user) {
      return user.username === username && user.password === password;
    });
  }

  findUserById(userId: String) {
    return this.users.find(function (user) {
      return user._id === userId;
    });
  }
}
