import {User} from './user.model.client';

export class Website {
  _id: String;
  name: String;
  date: String;
  place: String;
  attendees: String[];
  url: String;
  constructor(_id, name, date, place, attendees, url) {
    this._id = _id;
    this.name = name;
    this.date = date;
    this.place = place;
    this.attendees = attendees;
    this.url = url;
  }
}
