import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  userId: string;
  constructor(private userService: UserService,
              private websiteService: WebsiteService,
              private activeRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.userId = params['uid'];
  });
  }
  toProfile() {
    this.router.navigate(['/user/' + this.userId]);
  }
  dropdown() {
    document.getElementById('myDropdown').classList.toggle('show');
  }

  filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    var div = document.getElementById('myDropdown');
    a = div.getElementsByTagName('a');
    for (i = 0; i < a.length; i++) {
      if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = '';
      } else {
        a[i].style.display = 'none';
      }
    }
  }
}
