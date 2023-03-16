import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from '../models/models-hoobies';
import { RegistryPersonService } from '../services/registry-person.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin=undefined;
  
  constructor(private service:RegistryPersonService) { }

  ngOnInit(): void {
  }
  recoverDataUser(formLogin:NgForm){
    let person=new Person()
    person.name=formLogin.value.name
    this.service.loginUser(person);
  }

}
