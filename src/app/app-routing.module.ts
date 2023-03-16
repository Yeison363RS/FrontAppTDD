import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HoobiesUpdateComponent } from './hoobies-update/hoobies-update.component';
import { RegistryPersonComponent } from './registry-person/registry-person.component';
import { ResourceNotFound } from './errors_components/e_resource-not-found';
import { GroupsUpdateComponent } from './groups-update/groups-update.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:"",component:GroupsUpdateComponent},
{path:"update",component:HoobiesUpdateComponent},
{path:"registry",component:RegistryPersonComponent},
{path:"login",component:LoginComponent},
{path:"logout",component:LoginComponent},
{path:"**",component:ResourceNotFound}];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
