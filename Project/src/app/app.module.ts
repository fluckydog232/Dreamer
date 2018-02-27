import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { Routing } from './app.routing';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteAttendeesComponent } from './components/website/website-attendees/website-attendees.component';
import { PersonComponent } from './components/website/website-attendees/person/person.component';
import { MessageComponent } from './components/website/website-attendees/person/message/message.component';
import { InboxComponent } from './components/user/inbox/inbox.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteListComponent,
    WebsiteNewComponent,
    WebsiteAttendeesComponent,
    PersonComponent,
    MessageComponent,
    InboxComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
