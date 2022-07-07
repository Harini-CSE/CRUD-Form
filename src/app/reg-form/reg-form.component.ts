import { Component, OnInit } from "@angular/core";
import { userObj } from "../interfaces/users";

@Component({
  selector: "app-reg-form",
  templateUrl: "./reg-form.component.html",
  styleUrls: ["./reg-form.component.css"]
})
export class RegFormComponent implements OnInit {
  userObj: userObj;

  constructor() {
    this.userObj = new userObj();
  }

  ngOnInit(): void {}

  addUser() {
    const oldRecords = localStorage.getItem("userlist");
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      userList.push(this.userObj);
      localStorage.setItem("userlist", JSON.stringify(userList));
    } else {
      const userArr = [];
      userArr.push(this.userObj);
      localStorage.setItem("userlist", JSON.stringify(userArr));
    }
  }
}
