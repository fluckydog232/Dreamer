import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { AppComponent } from "./app.component";
import {LoginComponent} from "./components/user/login/login.component";
import {RegisterComponent} from "./components/user/register/register.component";
import {ProfileComponent} from "./components/user/profile/profile.component";
import {WebsiteListComponent} from "./components/website/website-list/website-list.component";
import {WebsiteNewComponent} from "./components/website/website-new/website-new.component";
import { WebsiteAttendeesComponent } from './components/website/website-attendees/website-attendees.component';
import { PersonComponent } from './components/website/website-attendees/person/person.component';
//import { MessageComponent } from './components/website/website-attendees/person/message/message.component';
//import { InboxComponent } from './components/user/profile/inbox/inbox.component';

const APP_ROUTES : Routes = [
  { path : '', component : LoginComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component:RegisterComponent },
  { path : 'user/:uid' , component: ProfileComponent},
  //{ path : 'user/:uid/:iid' , component: InboxComponent},
  { path : 'user/:uid/website' , component: WebsiteListComponent},
  { path : 'user/:uid/website/new' , component: WebsiteNewComponent},
  { path : 'user/:uid/website/att' , component: WebsiteAttendeesComponent},
  { path : 'user/:uid/website/att/:pid' , component: PersonComponent},
  //{ path : 'user/:uid/website/att/:pid/:mid' , component: MessageComponent},
];
// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
