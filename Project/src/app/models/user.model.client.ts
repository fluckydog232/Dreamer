export class User {
  _id: String;
  username: String;
  email: String;
  password: String;
  firstName: String;
  lastName: String;
  savedevents: String[];
  goingevents: String[];
  constructor(_id, username, email, password, firstName, lastName, savedevents, goingevents) {
    this._id = _id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.savedevents = savedevents;
    this.goingevents = goingevents;
  }
}
