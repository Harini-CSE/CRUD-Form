import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListuserComponent } from "./listuser/listuser.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { RegFormComponent } from "./reg-form/reg-form.component";
import { UserupdateComponent } from "./userupdate/userupdate.component";

const routes: Routes = [
  { path: "", component: RegFormComponent },
  { path: "listuser", component: ListuserComponent },
  { path: "regform", component: RegFormComponent },
  { path: "userupdate", component: UserupdateComponent },
  { path: "**", component: PagenotfoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
