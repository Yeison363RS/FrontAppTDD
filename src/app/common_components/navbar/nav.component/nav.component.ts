import { Component, OnInit } from '@angular/core';
import { RegistryPersonService } from 'src/app/services/registry-person.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private login:RegistryPersonService) { }

  ngOnInit(): void {
  }
  isLoginUser(){
    return this.login.isLoginUser();
  }
  
  logout(){
    console.log("Cerra sesion")
    this.login.logoutUser()
  }
}
