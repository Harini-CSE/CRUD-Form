import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { userObj } from "../interfaces/users";

@Component({
  selector: "app-userupdate",
  templateUrl: "./userupdate.component.html",
  styleUrls: ["./userupdate.component.css"]
})
export class UserupdateComponent implements OnInit {
  userObj: userObj;

  constructor(private route: ActivatedRoute) {
    this.userObj = new userObj();
    this.route.queryParams.subscribe(res => {
      this.userObj.userName = res["userName"];
    });
  }

  ngOnInit(): void {
    const oldRecords = localStorage.getItem("userlist");
    if (oldRecords != null) {
      const userList = JSON.parse(oldRecords);
      const currentUser = userList.find(
        (m: any) => m.userName == this.userObj.userName
      );
      if (currentUser != undefined) {
        this.userObj.country = currentUser.country;
        this.userObj.userEmail = currentUser.userEmail;
        this.userObj.dob = currentUser.country.dob;
        this.userObj.userAvatar = currentUser.userAvatar;
      }
    }
  }

  updateUser() {
    const oldRecords = localStorage.getItem("userlist");
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      userList.splice(
        userList.findIndex((a: any) => a.userName == this.userObj.userName),
        1
      );
      userList.push(this.userObj);
      localStorage.setItem("userlist", JSON.stringify(userList));
    }
  }
}
