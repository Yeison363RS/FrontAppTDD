import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoobiesDetaillComponent } from './hoobies-detaill/hoobies-detaill.component';
import { HoobiesUpdateComponent } from './hoobies-update/hoobies-update.component';
import { ResourceNotFound } from './errors_components/e_resource-not-found';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './common_components/navbar/nav.component/nav.component';
import { RegistryPersonComponent } from './registry-person/registry-person.component';
import { GroupsUpdateComponent } from './groups-update/groups-update.component';
import { LoginComponent } from './login/login.component'
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    HoobiesDetaillComponent,
    HoobiesUpdateComponent,
    ResourceNotFound,
    NavComponent,
    RegistryPersonComponent,
    GroupsUpdateComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],

  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
