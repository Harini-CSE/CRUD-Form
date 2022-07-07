import { Component, OnInit } from "@angular/core";
import { userObj } from "../interfaces/users";

@Component({
  selector: "app-listuser",
  templateUrl: "./listuser.component.html",
  styleUrls: ["./listuser.component.css"]
})
export class ListuserComponent implements OnInit {
  userList: userObj[];

  constructor() {
    this.userList = [];
  }

  ngOnInit(): void {
    const records = localStorage.getItem("userlist");

    if (records !== null) {
      this.userList = JSON.parse(records);
    }
  }

  resetList() {
    localStorage.removeItem("userlist");
    return localStorage;
  }
}
