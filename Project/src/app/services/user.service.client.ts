import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import {users} from './user.mock.client';

@Injectable()
export class UserService {
  options: RequestOptions = new RequestOptions();

  constructor(private http: Http) {
    this.http = http;
  }

  users: User[] = users;
  api = {
    'createUser' : this.createUser,
    'findUserByEmail' : this.findUserByEmail,
    'findUserByCredentials': this.findUserByCredentials,
    'findUserById': this.findUserById,
    'updateUser': this.updateUser,
  };

  createUser(user: any) {
    const id  = Math.random().toString(36).substr(2, 3);
    user._id = id;
    this.users.push(user);
    return user;
  }

  findUserByEmail(email: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].email === email) {
        return this.users[x];
      }
    }
  }
  updateUser(userId: String, user: User) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users[x].username = user.username;
        this.users[x].email = user.email;
        this.users[x].firstName = user.firstName;
        this.users[x].lastName = user.lastName;
        this.users[x].password = user.password;
      }
    }
  }

  findUserByCredentials(email: String, password: String) {
    return this.users.find(function (user) {
      return user.email === email && user.password === password;
    });
  }

  findUserById(userId: String) {
    return this.users.find(function (user) {
      return user._id === userId;
    });
  }
}
