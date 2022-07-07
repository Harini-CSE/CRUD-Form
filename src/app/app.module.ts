import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ListuserComponent } from "./listuser/listuser.component";
import { RegFormComponent } from "./reg-form/reg-form.component";
import { UserupdateComponent } from "./userupdate/userupdate.component";
import { DobPipe } from "./Pipes/dob.pipe";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListuserComponent,
    RegFormComponent,
    UserupdateComponent,
    DobPipe,
    PagenotfoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
