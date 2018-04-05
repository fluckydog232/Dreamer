import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {User} from '../../../models/user.model.client';
import {Website} from '../../../models/website.model.client';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';


@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  userId: String;
  websiteName: String;
  website: Website;
  savedwebsites: Website[] = [];
  goingwebsites: Website[] = [];
  user: User;

  constructor(private userService: UserService,
              private websiteService: WebsiteService,
              private activeRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.userId = params['uid'];
      this.user = this.userService.findUserById(this.userId);
      console.log('userId: ', this.user._id);
      this.websiteService.findSavedEventsByUser(this.userId)
        .subscribe((savedwebsites) => {
          console.log(savedwebsites);
          this.savedwebsites = this.savedwebsites.concat(savedwebsites);
        });
      this.websiteService.findGoingEventsByUser(this.userId).subscribe(goingwebsites => {
        console.log(goingwebsites);
        this.goingwebsites = this.goingwebsites.concat(this.goingwebsites);
      });
    });
  }
  toNewEvent() {
    this.router.navigate(['/user/' + this.userId + '/website/new']);
  }
  toProfile() {
    this.router.navigate(['/user/' + this.userId]);
  }


}
