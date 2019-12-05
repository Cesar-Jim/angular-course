import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-username",
  templateUrl: "./username.component.html",
  styles: [
    `
      .online {
        color: white;
      }
    `
  ]
})
export class UsernameComponent implements OnInit {
  userCleared = false;
  usernameBeforeClear = "";
  serverStatus = "offline";
  users = ["user1", "user2"];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  username = "";

  ngOnInit() {}

  resetUser() {
    this.usernameBeforeClear = this.username;
    this.username = "";
    this.userCleared = true;
  }

  getColor() {
    return this.serverStatus === "online" ? "green" : "gray";
  }

  addUser(username: string) {
    this.users.push(username);
    console.log(this.users);
    return this.users;
  }
}
