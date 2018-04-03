import {User} from '../models/user.model.client';
import {UserService} from './user.service.client';
import {Website} from '../models/website.model.client';
import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';
import { filter } from 'rxjs/operators';
import {users} from './user.mock.client';
import {websites} from './website.mock.client';

@Injectable()
export class WebsiteService {
  options: RequestOptions = new RequestOptions();

  constructor(private http: Http,
              private userService: UserService) {
    this.http = http;
  }

  websites: Website[] = websites;
  api = {
    'findSavedEventssByUser': this.findSavedEventsByUser,
    'findGoingEventsByUser': this.findGoingEventsByUser,
  };

  findSavedEventsByUser(userId: String) {
    const user: User = this.userService.findUserById(userId);
    const list: String[] = user.savedevents;
    return from(this.websites).pipe(filter(website => list.indexOf(website._id) > -1));
  }

  findGoingEventsByUser(userId: String) {
    const user: User = this.userService.findUserById(userId);
    const list: String[] = user.goingevents;
    return from(this.websites).pipe(filter(website => list.indexOf(website._id) > -1));
  }
}
